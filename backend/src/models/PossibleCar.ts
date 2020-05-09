import mongoose from 'mongoose'

const possibleCarSchema = new mongoose.Schema({
  name: String,
  isDefault: Boolean
})

export default mongoose.model('PossibleCar', possibleCarSchema)
