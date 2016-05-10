import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'

/**
 * Make sure given target is an object.
 */
const isObject = target =>
	!Array.isArray(target) &&
	!(target instanceof String) &&
	!!target && typeof target === 'object'

/**
 * Reduction for reading a property.
 */
const getDeepResource = (localization, key) => {
  if ((isObject(localization[key]) || typeof localization[key] === 'string')) {
    return localization[key]
  }
  return `Missing string resource for [${Object.keys.join(', ')}]`
}

/**
 * Wrap given component to provide a 'translate' context.
 */
export default function translate(component, resource = {}) {
  /**
   * Context-providing component to wrap the subcomponent.
   */
  const Translator = React.createClass({
    propTypes: {
      locale: PropTypes.string.isRequired,
    },

    childContextTypes: {
      translate: PropTypes.func.isRequired,
    },

    getChildContext() {
      return {
        translate: (...keys) =>
          keys.concat([this.props.locale]).reduce(getDeepResource, resource),
      }
    },

    render() {
      return React.createElement(component, this.props)
    },
  })

  const smart = connect(
    state => ({
      locale: state.locale,
    }))

  return smart(Translator)
}
