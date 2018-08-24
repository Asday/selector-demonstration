import React from 'react'
import PropTypes from 'prop-types'

import { map } from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { toggleShowAllReviews } from 'models/app/actions'
import { loadReviews } from 'models/reviews/actions'
import { reviewsSelector } from 'models/reviews/selectors'

const select = (state) => ({
  reviews: reviewsSelector(state),
})

const actions = (dispatch) => bindActionCreators(
  {
    onMount: loadReviews,
    onToggleShowAll: toggleShowAllReviews,
  },
  dispatch,
)

export class App extends React.Component {
  static propTypes = {
    onMount: PropTypes.func.isRequired,
    onToggleShowAll: PropTypes.func.isRequired,
    reviews: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      comment: PropTypes.string.isRequired,
      hidden: PropTypes.bool.isRequired,
    })).isRequired,
  }

  constructor(props) {
    super(props)

    props.onMount([
      { id: 0, comment: 'a', hidden: true },
      { id: 1, comment: 'b', hidden: true },
      { id: 2, comment: 'c', hidden: false },
      { id: 3, comment: 'd', hidden: false },
      { id: 4, comment: 'e', hidden: false },
      { id: 5, comment: 'f', hidden: false },
      { id: 6, comment: 'g', hidden: true },
      { id: 7, comment: 'h', hidden: false },
      { id: 8, comment: 'i', hidden: true },
      { id: 9, comment: 'j', hidden: true },
      { id: 10, comment: 'k', hidden: false },
      { id: 11, comment: 'l', hidden: true },
      { id: 12, comment: 'm', hidden: true },
    ])
  }

  renderReviews = () => {
    const {
      reviews,
    } = this.props

    return map(reviews, ({ id, comment }) => <p key={id}>{comment}</p>)
  }

  render = () => {
    const {
      onToggleShowAll,
    } = this.props

    return (
      <div>
        <h1>Reviews</h1>
        {this.renderReviews()}
        <button type="button" onClick={onToggleShowAll}>
          Toggle show all
        </button>
      </div>
    )
  }
}

export default connect(select, actions)(App)
