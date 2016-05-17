import 'app/views/index/style.sass'

import React, { PropTypes } from 'react'
import { connect }          from 'react-redux'

import translate from 'app/hoc/translate'
import { fetchDogs } from 'app/actions/dog-list'

/**
 * Index view of the application.
 */
export const IndexView = React.createClass({
  propTypes: {
    dogs: PropTypes.array.isRequired,
    fetchDogs: PropTypes.func.isRequired,
  },
  contextTypes: {
    translate: PropTypes.func.isRequired,
  },
  componentDidMount() {
    this.props.fetchDogs()
  },
  render() {
    return (
      <article className="index-view">
        <ul>
          {this.props.dogs.map((dog, key) => <li key={key}>{dog.name}</li>)}
        </ul>
      </article>
    )
  },
})

const smart = connect(
  state => ({
    dogs: state.dogs,
  }),
  dispatch => ({
    fetchDogs: () => dispatch(fetchDogs()),
  }))

export default smart(translate(IndexView, require('app/localization.json')))
