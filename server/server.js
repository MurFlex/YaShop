import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import authRoutes from './app/auth/auth.routes.js'
import categoriesRoutes from './app/categories/categories.routes.js'
import imagesRoutes from './app/images/images.routes.js'
import { auth } from './app/middleware/auth.middleware.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'
import productsRoutes from './app/products/products.routes.js'
import vendorsRoutes from './app/vendors/vendor.routes.js'

const app = express()

dotenv.config()

async function main() {
	app.use(express.json())
	app.use(cors())

	const PORT = process.env.PORT || 3000

	const __dirname = path.resolve()

	app.use('/static', express.static(path.join(__dirname, '/static')))

	app.use('/api/auth', authRoutes)
	app.use('/api/products', auth, productsRoutes)
	app.use('/api/vendors', auth, vendorsRoutes)
	app.use('/api/categories', auth, categoriesRoutes)
	app.use('/api/images', auth, imagesRoutes)

	app.use(notFound)
	app.use(errorHandler)

	app.listen(
		PORT,
		console.log(
			`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`
		)
	)
}

main()
	.then(async () => {
		await prisma.$disconnect()
	})
	.catch(async e => {
		console.error(e)
		await prisma.$disconnect()
		process.exit(1)
	})
