import { prisma } from '../prisma.js'

// GET

// @desc Get list of all products
// @route GET api/products/
// @access Private
export const getProducts = async (req, res) => {
	const exercises = await prisma.product.findMany({})

	if (!exercises) {
		return res.status(404).json({ error: 'Товары не найдены' })
	}

	res.json(exercises)
}

// @desc Get product by id
// @route GET api/products/:id
// @access Private
export const getProduct = async (req, res) => {
	const { id } = req.params

	const product = await prisma.product.findUnique({
		where: {
			id: Number(id),
		},
	})

	if (!product) {
		return res.status(404).json({ error: 'Товар не найден' })
	}

	return res.json(product)
}

// POST

// @desc Creating new product
// @route POST api/products
// @access Private
export const createNewProduct = async (req, res) => {
	const { name, description, price, image_path, published } = req.body

	try {
		const product = await prisma.product.create({
			data: {
				name,
				description,
				price,
				image_path,
				published,
			},
		})

		if (!product) {
			return res.status(404).json({ error: 'Ошибка при создании товара' })
		}

		return res.json(product)
	} catch (error) {
		res.status(400).json({ error: 'Невалидные данные' })
	}

	return res.status(400).json({ error: 'Невалидные данные' })
}

// PATCH

// @desc Updating an existing product
// @route PATCH /api/products/:id
// @access Private
export const updateProduct = async (req, res) => {
	const { id } = req.params

	const { name, description, price, image_path, published } = req.body

	try {
		const product = await prisma.product.update({
			where: {
				id: Number(id),
			},
			data: {
				name,
				description,
				price,
				image_path,
				published,
			},
		})

		if (!product) {
			return res.status(404).json({ error: 'Ошибка при обновлении товара' })
		}

		return res.json(product)
	} catch (error) {
		return res.status(400).json({ error: 'Невалидные данные' })
	}
}

// DELETE

// @desc Deleting an existing product
// @route DELETE /api/products/:id
// @access Private
export const deleteProduct = async (req, res) => {
	const { id } = req.params

	try {
		const product = await prisma.product.delete({
			where: {
				id: Number(id),
			},
		})

		return res.json('Товар успешно удален!')
	} catch (error) {
		return res.status(404).json({ error: 'Товар не найден' })
	}
}
