import { combineReducers } from 'redux'

import { TOGGLE_SHOW_ALL_REVIEWS } from 'models/app/actions'

const initialShowAllReviews = false
const showAllReviews = (state=initialShowAllReviews, { type }) => {
  switch (type) {
    case TOGGLE_SHOW_ALL_REVIEWS:
      return !state

    default:
      return state
  }
}

export default combineReducers({
  showAllReviews,
})
