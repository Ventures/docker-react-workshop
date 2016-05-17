import test            from 'tape'
import thunk           from 'redux-thunk'
import createMockStore from 'redux-mock-store'

import {
  fetchDogs,
} from 'app/actions/dog-list'


const mockStore = createMockStore([ thunk ])

test.skip('actions/dog-list#fetchDogs', t => {
  return t.end()
})
