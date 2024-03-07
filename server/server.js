import dotenv from 'dotenv'
import express from 'express'
import { prisma } from './app/prisma.js'
import path from 'path'
import productsRoutes from './app/products/products.routes.js'

const app = express()

dotenv.config()

async function main() {
	app.use(express.json())

	const PORT = process.env.PORT || 3000

	const __dirname = path.resolve()

	app.use('/uploads', express.static(path.join(__dirname, '/uploads/')))

	app.use('/api/products', productsRoutes)

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
