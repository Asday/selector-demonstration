export const LOAD_REVIEWS = '@reviews/LOAD_REVIEWS'
export const loadReviews = (reviews) => ({
  type: LOAD_REVIEWS,
  payload: { reviews },
})
