export const SET_ERROR = 'SET_ERROR'

/**
 * Publish the error to the application's state.
 */
export const setError = (origin, payload) =>
  ({ type: SET_ERROR, origin, payload })
