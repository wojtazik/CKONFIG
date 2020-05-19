import mongoose from 'mongoose'
import PossibleCarSchema from '../models/PossibleCar'
import CarOption from '../models/CarOption'
import {NextFunction, Request, Response} from "express";
import readUrlName from "../helper/readUrlName";
import config from '../config/config'

mongoose.connect(`mongodb+srv://${config.DB_USER}:${config.DB_PASSWORD}@carsoptions-uedal.mongodb.net/${config.DB_NAME}?retryWrites=true&w=majority`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('db_connected')
}).catch(() => {
  console.error('db_connection_error')
})

const getPossibleCars = async (req: Request, res: Response, next: NextFunction) => {
  const possibleCars = await PossibleCarSchema.find().exec()

  res.json(possibleCars)
}

const getCarsConfig = async (req: Request, res: Response, next: NextFunction) => {
  const possibleCars = await PossibleCarSchema.find().exec()

  res.json(possibleCars)
}

const getCarConfig = async (req: Request, res: Response, next: NextFunction) => {
  const carName:String = readUrlName(req.params.name)
  const car = await CarOption.findOne({carName: carName}).exec()

  res.json(car)
}

export { getPossibleCars, getCarsConfig, getCarConfig }
