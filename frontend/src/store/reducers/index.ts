import { combineReducers } from 'redux'

import { possibleCarsReducer } from './possibleCarsReducer'
import { carOptionReducer } from './carOptionReducer'
import { selectCarReducer } from './selectCarReducer'
import { errorReducer } from './errorReducer'

export default combineReducers({
  possibleCarsState: possibleCarsReducer,
  carOptionState: carOptionReducer,
  selectedCarState: selectCarReducer,
  errorState: errorReducer
})
