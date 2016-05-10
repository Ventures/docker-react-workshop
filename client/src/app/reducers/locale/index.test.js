import test from 'tape'
import reducer, { initialState } from 'app/reducers/locale'

test('reducers/locale', t => {
  t.deepEqual(reducer(undefined, { }), initialState)
  return t.end()
})
