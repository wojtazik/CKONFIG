import { ISetError, SET_ERROR } from './actionsType'

export const setError = (payload: string): ISetError => {
  return {
    type: SET_ERROR,
    payload: payload
  }
}
