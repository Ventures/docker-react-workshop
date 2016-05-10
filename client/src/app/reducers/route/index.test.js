import test from 'tape'
import reducer, { initialState } from 'app/reducers/route'

test('reducers/route', t => {
  t.deepEqual(reducer(undefined, { }), initialState)
  return t.end()
})
