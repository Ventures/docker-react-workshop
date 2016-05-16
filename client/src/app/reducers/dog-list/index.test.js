import test from 'tape'
import reducer, { initialState } from 'app/reducers/dog-list'


test('reducers/dog-list', t => {
  t.test('should initialize correctly', t => {
    t.deepEqual(reducer(undefined, { }), initialState)
    return t.end()
  })
  return t.end()
})
