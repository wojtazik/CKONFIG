import { ISetError, SET_ERROR } from '../actions/actionsType'

export function errorReducer (state: string = null, action: ISetError) {
  switch (action.type) {
    case SET_ERROR:
      state = action.payload
      return state
    default:
      return state
  }
}
