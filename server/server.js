import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import categoriesRoutes from './app/categories/categories.routes.js'
import { errorHandler, notFound } from './app/middleware/error.middleware.js'
import { prisma } from './app/prisma.js'
import productsRoutes from './app/products/products.routes.js'
import vendorsRoutes from './app/vendors/vendor.routes.js'

const app = express()

dotenv.config()

async function main() {
	app.use(express.json())

	const PORT = process.env.PORT || 3000

	const __dirname = path.resolve()

	app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

	app.use('/api/products', productsRoutes)
	app.use('/api/vendors', vendorsRoutes)
	app.use('/api/categories', categoriesRoutes)

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
