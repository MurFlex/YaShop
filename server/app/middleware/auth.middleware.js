import jwt from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import { prisma } from '../prisma.js'
import { userFields } from '../utils/userFields.js'

export const auth = asyncHandler(async (req, res, next) => {
	const token = req.headers.authorization.split(' ')[1]

	if (!token) {
		res.status(401)
		throw new Error('Необходима авторизация')
	}

	const decode = jwt.verify(token, process.env.JWT_SECRET)

	const user = await prisma.User.findUnique({
		where: {
			id: decode.userId,
		},
		select: userFields,
	})

	if (user) {
		req.user = user
		next()
	}
})
