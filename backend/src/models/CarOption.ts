import mongoose, {Schema} from 'mongoose'

const gearboxSchema: Schema = new mongoose.Schema({
  name: String,
  price: Number,
  isDefault: Boolean
})

const engineSchema: Schema = new mongoose.Schema({
  displacementCC: Number,
  price: Number,
  horsePower: String,
  isDefault: Boolean,
  allowedGearbox: [gearboxSchema]
})

const colorSchema: Schema = new mongoose.Schema({
  colorCode: String,
  price: Number,
  isDefault: Boolean
})

const carOptionSchema: Schema = new mongoose.Schema({
  carName: String,
  price: Number,
  possibleEngines: [engineSchema],
  colors: [colorSchema],
  customColorPrice: Number
})

export default mongoose.model('CarOption', carOptionSchema)
