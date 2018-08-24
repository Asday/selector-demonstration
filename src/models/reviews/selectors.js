import { filter } from 'lodash'
import { createSelector } from 'reselect'

import { showAllReviewsSelector } from 'models/app/selectors'

export const allReviewsSelector = (state) => state.reviews.reviews

export const reviewsSelector = createSelector(
  allReviewsSelector,
  showAllReviewsSelector,
  (reviews, showAll) => (
    showAll ? reviews : filter(reviews, ({ hidden }) => (!hidden))
  ),
)
