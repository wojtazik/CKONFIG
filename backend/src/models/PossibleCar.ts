import mongoose, {Schema} from 'mongoose'

const PossibleCarSchema: Schema = new mongoose.Schema({
  name: String,
  isDefault: Boolean
})

export default mongoose.model('PossibleCar', PossibleCarSchema)
