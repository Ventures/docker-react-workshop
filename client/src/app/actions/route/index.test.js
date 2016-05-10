import test from 'tape'

import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import {
  setRoute,
  SET_ROUTE,
} from 'app/actions/route'


const mockStore = createMockStore([thunk])

test('actions/route#setRoute', t => {
  const store = mockStore({ })
  store.dispatch(setRoute({ path: '/' }))

  t.deepEqual(store.getActions(), [
    { type: SET_ROUTE, payload: { path: '/' } }
  ])
  return t.end()
})
