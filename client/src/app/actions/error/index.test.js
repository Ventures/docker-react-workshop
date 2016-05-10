import test from 'tape'

import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import {
  setError,
  SET_ERROR,
} from 'app/actions/error'


const mockStore = createMockStore([thunk])

test('actions/error#setError', t => {
  const store = mockStore([])
  store.dispatch(setError('SAMPLE_ACTION', new Error('test')))

  t.deepEqual(store.getActions(), [
    { type: SET_ERROR, origin: 'SAMPLE_ACTION', payload: new Error('test') },
  ])
  return t.end()
})
