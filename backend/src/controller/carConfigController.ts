import {getCarConfig, getCarsConfig, getPossibleCars} from '../database/mongoose'

const getPossibleCarsOptions = getPossibleCars
const getCars = getCarsConfig
const getCar = getCarConfig

export { getPossibleCarsOptions, getCars, getCar }
