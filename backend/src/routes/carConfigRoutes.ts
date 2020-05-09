import express from 'express'
import { getPossibleCarsOptions } from '../controller/carConfigController'

const router = express.Router()

router.get('/', getPossibleCarsOptions)

export default router
