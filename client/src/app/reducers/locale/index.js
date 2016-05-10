import createReducer  from 'app/utils/create-reducer'
import { SET_LOCALE } from 'app/actions/locale'

const handlers = {
  [SET_LOCALE]: (locale, action) => action.payload,
}

export const initialState = 'en'

export default createReducer(handlers, initialState)
