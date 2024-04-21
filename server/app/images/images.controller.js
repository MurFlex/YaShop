import asyncHandler from 'express-async-handler'
import { unlink } from 'node:fs/promises'
import { prisma } from '../prisma.js'

// GET

// @desc Get list of all images
// @route GET api/images/
// @access Private
export const getImages = asyncHandler(async (req, res) => {
	const exercises = await prisma.image.findMany({})

	if (!exercises) {
		return res.status(404).json({ error: 'Не найдено' })
	}

	res.json(exercises)
})

// @desc Get image by id
// @route GET api/images/:id
// @access Private
export const getImage = asyncHandler(async (req, res) => {
	const { id } = req.params

	const image = await prisma.image.findUnique({
		where: {
			id: +id,
		},
	})

	if (!image) {
		return res.status(404).json({ error: 'Не найдено' })
	}

	return res.json(image)
})

// POST

// @desc Uploading new image
// @route POST api/images
// @access Private
export const uploadNewImage = asyncHandler(async (req, res) => {
	const data = req.files.file.reduce((acc, cur) => {
		return [...acc, { path: cur.path }]
	}, [])

	const images = await prisma.image.createMany({
		data,
	})

	return res.status(200).json(`Изображений загружено: ${images.count}`)
})

// DELETE

// @desc Deleting an existing image
// @route DELETE /api/images/:id
// @access Private
export const deleteImage = asyncHandler(async (req, res) => {
	const { id } = req.params

	try {
		const image = await prisma.image.delete({
			where: {
				id: +id,
			},
		})

		unlink(image.path, err => {
			if (err) throw err
		})

		return res.json('Изображение успешно удалено!')
	} catch (error) {
		return res.status(500).json({ error: 'Внутренняя ошибка' })
	}
})
