import express, {Router} from 'express'
import {getCar, getCars, getPossibleCarsOptions} from '../controller/carConfigController'

const router: Router = express.Router()

router.get('/possible-cars', getPossibleCarsOptions)
router.get('/cars', getCars)
router.get('/cars/:name', getCar)

export default router
