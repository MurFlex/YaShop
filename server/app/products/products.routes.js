import express from 'express'
import {
	getProducts,
	getProduct,
	createNewProduct,
	deleteProduct,
	updateProduct,
} from './products.controller.js'

const router = express.Router()

router.route('/').get(getProducts).post(createNewProduct)

router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct)

export default router
