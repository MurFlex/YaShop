import express from 'express'
import {
	createNewVendor,
	deleteVendor,
	getVendor,
	getVendors,
	updateVendor,
} from './vendor.controller.js'

const router = express.Router()

router.route('/:id').get(getVendor).delete(deleteVendor).patch(updateVendor)
router.route('/').get(getVendors).post(createNewVendor)

export default router
