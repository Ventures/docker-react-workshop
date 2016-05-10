import recycle           from 'redux-recycle'
import { handleActions } from 'redux-actions'

export default function createReducer(handlers, initialState, resetOn = []) {
  return recycle(handleActions(handlers, initialState), resetOn, initialState)
}
