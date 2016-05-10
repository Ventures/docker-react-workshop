import createReducer from 'app/utils/create-reducer'
import { SET_ROUTE } from 'app/actions/route'


const handlers = {
  [SET_ROUTE]: (route, action) => action.payload,
}

export const initialState = {
  path:   '/',
  actual: '/',

  query:  { },
  params: { },

  component: null,
}

export default createReducer(handlers, initialState)
