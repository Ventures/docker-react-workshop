import createActionCreator from 'app/utils/create-action-creator'


export const SET_ROUTE = 'SET_ROUTE'

/**
 * Set the application's currently active route.
 */
export const setRoute = createActionCreator(SET_ROUTE)
