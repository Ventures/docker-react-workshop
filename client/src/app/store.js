import * as redux  from 'redux'

import thunk   from 'redux-thunk'
import logger  from 'redux-logger'

import * as router      from 'react-router'
import * as reduxRouter from 'react-router-redux'

const createStore =
  redux.applyMiddleware(
    reduxRouter.routerMiddleware(router.browserHistory), thunk, logger())(redux.createStore)

const rootReducer = redux.combineReducers({
  /**
   * Vendor reducers.
   */
  routing: reduxRouter.routerReducer,

  /**
   * Custom reducers.
   */
  error:  require('app/reducers/error').default,
  locale: require('app/reducers/locale').default,
})

export default createStore(rootReducer)
