import 'app/index.sass'

import React                    from 'react'
import { Provider }             from 'react-redux'
import { Router, Route }        from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import store   from 'app/store'
import history from 'app/history'

const application = (
  <Provider store={store}>
    <Router history={syncHistoryWithStore(history, store)}>
      <Route path="/" component={require('app/views/index').default} />
    </Router>
  </Provider>
)

export default application
