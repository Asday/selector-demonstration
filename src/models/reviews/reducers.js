import { combineReducers } from 'redux'

import { LOAD_REVIEWS } from 'models/reviews/actions'

const initialReviews = []
const reviews = (state=initialReviews, { type, payload }) => {
  switch (type) {
    case LOAD_REVIEWS:
      return payload.reviews

    default:
      return state
  }
}

export default combineReducers({
  reviews,
})
