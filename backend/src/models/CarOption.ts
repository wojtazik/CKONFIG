import mongoose from 'mongoose'

const gearboxSchema = new mongoose.Schema({
  name: String,
  price: Number
})

const engineSchema = new mongoose.Schema({
  displacementCC: Number,
  price: Number,
  horsePower: String,
  isDefault: Boolean,
  allowedGearbox: [gearboxSchema]
})

const colorSchema = new mongoose.Schema({
  colorCode: String,
  price: Number,
  isDefault: Boolean
})

const carOptionSchema = new mongoose.Schema({
  carName: String,
  price: Number,
  possibleEngines: [engineSchema],
  colors: [colorSchema]
})

export default mongoose.model('CarOption', carOptionSchema)
