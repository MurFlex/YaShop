import express from 'express'
import {
	createNewVendor,
	deleteVendor,
	getVendors,
	updateVendor,
} from './vendor.controller.js'

const router = express.Router()

router.route('/:id').get(getVendors).delete(deleteVendor).patch(updateVendor)
router.route('/').post(createNewVendor)

export default router
