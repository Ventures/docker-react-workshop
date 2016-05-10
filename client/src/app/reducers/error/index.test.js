import test from 'tape'
import reducer, { initialState } from 'app/reducers/error'

test('reducers/error', t => {
  t.deepEqual(reducer(undefined, { }), initialState)
  return t.end()
})
