import { chunk, filter, get, size } from 'lodash'
import { createSelector } from 'reselect'

import {
  pageSelector,
  pageSizeSelector,
  showAllReviewsSelector,
} from 'models/app/selectors'

export const allReviewsSelector = (state) => state.reviews.reviews

export const allReviewCountSelector = createSelector(
  allReviewsSelector,
  size,
)

export const reviewsSelector = createSelector(
  allReviewsSelector,
  showAllReviewsSelector,
  (reviews, showAll) => (
    showAll ? reviews : filter(reviews, ({ hidden }) => (!hidden))
  ),
)

export const reviewCountSelector = createSelector(
  reviewsSelector,
  size,
)

export const pagedReviewsSelector = createSelector(
  reviewsSelector,
  pageSelector,
  pageSizeSelector,
  (reviews, page, pageSize) => get(chunk(reviews, pageSize), page, []),
)
