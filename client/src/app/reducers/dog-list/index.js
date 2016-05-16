import createReducer from 'app/utils/create-reducer'

import {
  FETCH_DOGS_SUCCESS,
} from 'app/actions/dog-list'

const handlers = {
 [FETCH_DOGS_SUCCESS]: (state, action) => action.payload,
}

export const initialState = [ ]

export default createReducer(handlers, initialState)
