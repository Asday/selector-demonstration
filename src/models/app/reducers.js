import { combineReducers } from 'redux'

import {
  NEXT_PAGE,
  PREVIOUS_PAGE,
  SPECIFIC_PAGE,
  TOGGLE_SHOW_ALL_REVIEWS,
 } from 'models/app/actions'
import { LOAD_REVIEWS } from 'models/reviews/actions'

const initialShowAllReviews = false
const showAllReviews = (state=initialShowAllReviews, { type }) => {
  switch (type) {
    case TOGGLE_SHOW_ALL_REVIEWS:
      return !state

    default:
      return state
  }
}

const initialPage = 0
const page = (state=initialPage, { type, payload }) => {
  switch (type) {
    case NEXT_PAGE:
      return state + 1

    case PREVIOUS_PAGE:
      return state - 1

    case SPECIFIC_PAGE:
      return payload.page

    case LOAD_REVIEWS:
      return initialPage

    default:
      return state
  }
}

const initialPageSize = 3
const pageSize = (state=initialPageSize) => (state)

export default combineReducers({
  page,
  pageSize,
  showAllReviews,
})
