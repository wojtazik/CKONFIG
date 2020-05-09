import express from 'express'
import { addSpecificCarOption, getPossibleCarsOptions } from '../controller/carConfigController'

const router = express.Router()

router.get('/', getPossibleCarsOptions)
router.get('/add', addSpecificCarOption)

export default router
