import createActionCreator from 'app/utils/create-action-creator'

import fetch from 'isomorphic-fetch'

export const FETCH_DOGS = 'FETCH_DOGS'
export const FETCH_DOGS_SUCCESS = 'FETCH_DOGS_SUCCESS'

/**
 *
 */
export const fetchDogs = () => (dispatch, getState) => {
  dispatch({ type: FETCH_DOGS })
  return fetch('/api/dogs')
    .then(response => response.json())
    .then(response => dispatch({ type: FETCH_DOGS_SUCCESS, payload: response }))
    .catch(err => dispatch({ type: 'ERROR', payload: err }))
}
