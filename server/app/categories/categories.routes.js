import express from 'express'
import {
	createNewCategory,
	deleteCategory,
	getCategories,
	getCategory,
	updateCategory,
} from './categories.controller.js'

const router = express.Router()

router
	.route('/:id')
	.get(getCategory)
	.delete(deleteCategory)
	.patch(updateCategory)
router.route('/').get(getCategories).post(createNewCategory)

export default router
