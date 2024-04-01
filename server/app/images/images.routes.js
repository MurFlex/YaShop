import express from 'express'
import multer from 'multer'
import {
	deleteImage,
	getImage,
	getImages,
	uploadNewImage,
} from './images.controller.js'

const router = express.Router()

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		const { path } = req.query
		cb(null, `static/${path}`)
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname)
	},
})

const upload = multer({ storage })

router.route('/:id').get(getImage).delete(deleteImage)

router
	.route('/')
	.post(upload.fields([{ name: 'file' }, { name: 'folder' }]), uploadNewImage)
	.get(getImages)

export default router
