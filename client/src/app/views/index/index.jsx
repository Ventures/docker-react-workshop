import 'app/views/index/style.sass'

import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'

import translate from 'app/hoc/translate'


/**
 * Index view of the application.
 */
export const IndexView = React.createClass({
  propTypes: {
    route: PropTypes.object.isRequired,
  },
  contextTypes: {
    translate: PropTypes.func.isRequired,
  },
  render() {
    return (
      <article className="index-view">
        {this.context.translate('GREETING', 'FOR_YOU')}
        <pre>
          {JSON.stringify(this.props.route, null, 2)}
        </pre>
      </article>
    )
  },
})

const smart = connect(
  state => ({
    route: state.routing,
  }))

export default smart(translate(IndexView, require('app/localization.json')))
