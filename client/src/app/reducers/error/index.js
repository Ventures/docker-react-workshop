import createReducer from 'app/utils/create-reducer'
import { SET_ERROR } from 'app/actions/error'

const handlers = {
  [SET_ERROR]: (state, action) => action.payload,
}

export const initialState = null

export default createReducer(handlers, initialState)
