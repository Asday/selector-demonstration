import React from 'react'
import PropTypes from 'prop-types'

import { map } from 'lodash'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  nextPage,
  previousPage,
  specificPage,
  toggleShowAllReviews,
} from 'models/app/actions'
import { pageSelector, pageSizeSelector } from 'models/app/selectors'
import { loadReviews } from 'models/reviews/actions'
import {
  pagedReviewsSelector,
  reviewCountSelector,
} from 'models/reviews/selectors'

import Pagination from 'Pagination'

const select = (state) => ({
  currentPage: pageSelector(state),
  pageSize: pageSizeSelector(state),
  reviewCount: reviewCountSelector(state),
  reviews: pagedReviewsSelector(state),
})

const actions = (dispatch) => bindActionCreators(
  {
    onMount: loadReviews,
    onNextPage: nextPage,
    onPreviousPage: previousPage,
    onSpecificPage: specificPage,
    onToggleShowAll: toggleShowAllReviews,
  },
  dispatch,
)

export class App extends React.Component {
  static propTypes = {
    onMount: PropTypes.func.isRequired,
    onNextPage: PropTypes.func.isRequired,
    onPreviousPage: PropTypes.func.isRequired,
    onSpecificPage: PropTypes.func.isRequired,
    onToggleShowAll: PropTypes.func.isRequired,
    pageSize: PropTypes.number.isRequired,
    reviewCount: PropTypes.number.isRequired,
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
      currentPage,
      onNextPage,
      onPreviousPage,
      onSpecificPage,
      onToggleShowAll,
      pageSize,
      reviewCount,
    } = this.props

    return (
      <div>
        <h1>Reviews</h1>
        {this.renderReviews()}
        <button type="button" onClick={onToggleShowAll}>
          Toggle show all
        </button>
        <Pagination
          itemCount={reviewCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onNext={onNextPage}
          onPrevious={onPreviousPage}
          onSpecific={onSpecificPage}
        />
      </div>
    )
  }
}

export default connect(select, actions)(App)
