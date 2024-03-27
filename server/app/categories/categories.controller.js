import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// GET

// @desc Get list of all categories
// @route GET api/categories/
// @access Private
export const getCategories = asyncHandler(async (req, res) => {
	const exercises = await prisma.category.findMany({})

	if (!exercises) {
		return res.status(404).json({ error: 'Не найдено' })
	}

	res.json(exercises)
})

// @desc Get category by id
// @route GET api/categories/:id
// @access Private
export const getCategory = asyncHandler(async (req, res) => {
	const { id } = req.params

	const category = await prisma.category.findUnique({
		where: {
			id: +id,
		},
	})

	if (!category) {
		return res.status(404).json({ error: 'Не найдено' })
	}

	return res.json(category)
})

// POST

// @desc Creating new category
// @route POST api/categories
// @access Private
export const createNewCategory = asyncHandler(async (req, res) => {
	const { name, description, parent_category_id } = req.body

	try {
		const category = await prisma.category.create({
			data: {
				name,
				description,
				parent_category_id,
			},
		})

		if (!category) {
			return res.status(404).json({ error: 'Не найдено' })
		}

		return res.json(category)
	} catch (error) {
		res.status(500).json({ error: 'Внутренняя ошибка' })
	}

	return res.status(400).json({ error: 'Невалидные данные' })
})

// PATCH

export const updateCategory = asyncHandler(async (req, res) => {
	const { id } = req.params

	const { name, description, parent_category_id } = req.body

	try {
		const category = await prisma.category.update({
			where: {
				id: +id,
			},
			data: {
				name,
				description,
				parent_category_id,
			},
		})

		if (!category) {
			return res.status(404).json({ error: 'Не найдено' })
		}

		return res.json(category)
	} catch (error) {
		return res.status(500).json({ error: 'Внутренняя ошибка' })
	}
})

// DELETE

// @desc Deleting an existing category
// @route DELETE /api/categories/:id
// @access Private
export const deleteCategory = asyncHandler(async (req, res) => {
	const { id } = req.params

	try {
		const category = await prisma.category.delete({
			where: {
				id: +id,
			},
		})

		return res.json('Категория успешно удалена!')
	} catch (error) {
		return res.status(500).json({ error: 'Внутренняя ошибка' })
	}
})
