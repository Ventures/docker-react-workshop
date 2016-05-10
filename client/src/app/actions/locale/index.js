import createActionCreator from 'app/utils/create-action-creator'


export const SET_LOCALE = 'SET_LOCALE'

/**
 * Set the application's currently active locale.
 */
export const setLocale = createActionCreator(SET_LOCALE)
