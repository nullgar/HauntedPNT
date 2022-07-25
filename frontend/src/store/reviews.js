import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';

const load = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
};

export const loadReviews = (locationId) => async dispatch => {
    const res = await csrfFetch(`/api/review/${locationId}`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews;
    }
};

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_REVIEWS:
            const allReviews = {...state};

            action.reviews.map(review => (
                allReviews[review.id] = review
            ))
            return allReviews
        default:
            return state;
    }
};

export default reviewsReducer;
