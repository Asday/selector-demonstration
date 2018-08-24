export const TOGGLE_SHOW_ALL_REVIEWS = '@app/TOGGLE_SHOW_ALL_REVIEWS'
export const toggleShowAllReviews = () => ({ type: TOGGLE_SHOW_ALL_REVIEWS })

export const NEXT_PAGE = '@app/NEXT_PAGE'
export const nextPage = () => ({ type: NEXT_PAGE })

export const PREVIOUS_PAGE = '@app/PREVIOUS_PAGE'
export const previousPage = () => ({ type: PREVIOUS_PAGE })

export const SPECIFIC_PAGE = '@app/SPECIFIC_PAGE'
export const specificPage = (page) => ({
    type: SPECIFIC_PAGE,
    payload: { page },
})
