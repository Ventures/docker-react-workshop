import test from 'tape'

import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import {
  setLocale,
  SET_LOCALE,
} from 'app/actions/locale'


const mockStore = createMockStore([thunk])

test('actions/locale#setLocale', t => {
  const store = mockStore('en')
  store.dispatch(setLocale('en'))

  t.deepEqual(store.getActions(), [
    { type: SET_LOCALE, payload: 'en' },
  ])
  return t.end()
})
