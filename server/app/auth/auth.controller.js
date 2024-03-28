import asyncHandler from 'express-async-handler'
import { hash, verify } from 'argon2'
import { prisma } from '../prisma.js'
import { generateToken } from './generate-token.js'

// @desc	Auth user
// @route POST /api/auth/login
// @access Public
export const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body

	const user = await prisma.user.findUnique({
		where: {
			email: email,
		},
	})

	if (!user) {
		res.status(404)
		throw new Error('Пользователь не найден')
	}

	const isValidPassword = await verify(user.password, password)

	if (user && isValidPassword) {
		const token = generateToken(user.id)
		res.json([user, token])
	} else {
		res.status(401)
		throw new Error('Неверные почта или пароль')
	}
})

export const registerUser = asyncHandler(async (req, res) => {
	const { name, email, password } = req.body

	const isHaveUser = await prisma.user.findUnique({
		where: {
			email,
		},
	})

	if (isHaveUser) {
		res.status(400)
		throw new Error(`Пользователь с почтой ${email} уже существует`)
	}

	const user = await prisma.user.create({
		data: {
			email,
			password: await hash(password),
			name,
		},
	})

	const token = generateToken(user.id)

	res.json({ user, token })
})
