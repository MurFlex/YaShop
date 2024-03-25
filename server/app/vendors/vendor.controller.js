import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'

// GET

// @desc Get vendor by id
// @route GET api/vendors/:id
// @access Private
export const getVendors = async (req, res) => {
	const { id } = req.params

	const vendor = await prisma.vendor.findUnique({
		where: {
			id: +id,
		},
	})

	if (!vendor) {
		return res.status(404).json({ error: 'Не найдено' })
	}

	return res.json(vendor)
}

// POST

// @desc Creating new vendor
// @route POST api/vendors
// @access Private
export const createNewVendor = asyncHandler(async (req, res) => {
	const { name, description, discount } = req.body

	try {
		const vendor = await prisma.vendor.create({
			data: {
				name,
				description,
				discount,
			},
		})

		if (!vendor) {
			return res.status(404).json({ error: 'Не найдено' })
		}

		return res.json(vendor)
	} catch (error) {
		res.status(500).json({ error: 'Внутренняя ошибка' })
	}

	return res.status(400).json({ error: 'Невалидные данные' })
})

// PATCH

export const updateVendor = asyncHandler(async (req, res) => {
	const { id } = req.params

	const { name, description, discount } = req.body

	try {
		const vendor = await prisma.vendor.update({
			where: {
				id: +id,
			},
			data: {
				name,
				description,
				discount,
			},
		})

		if (!vendor) {
			return res.status(404).json({ error: 'Не найдено' })
		}

		return res.json(vendor)
	} catch (error) {
		return res.status(500).json({ error: 'Внутренняя ошибка' })
	}
})

// DELETE

// @desc Deleting an existing vendor
// @route DELETE /api/vendors/:id
// @access Private
export const deleteVendor = asyncHandler(async (req, res) => {
	const { id } = req.params

	try {
		const vendor = await prisma.vendor.delete({
			where: {
				id: +id,
			},
		})

		return res.json('Поставщик успешно удален!')
	} catch (error) {
		return res.status(500).json({ error: 'Внутренняя ошибка' })
	}
})
