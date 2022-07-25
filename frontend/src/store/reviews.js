import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';

const load = (reviews) => {
    return {
        type: LOAD_REVIEWS,
        reviews
    }
};
const create = (review) => {
    return {
        type: CREATE_REVIEW,
        review
    }
}

export const loadReviews = (locationId) => async dispatch => {

    const res = await csrfFetch(`/api/review/${locationId}`);
    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews;
    }
};

export const createReview = (review, locationId) => async dispatch => {

    const res = await csrfFetch(`/api/review/${locationId}/new/`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            review
        )
    });
    if (res.ok) {
        const review = await res.json();
        dispatch(create(review));
        return review;
    }
};

const reviewsReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_REVIEWS:
            const allReviews = {...state};

            action.reviews.map(review => (
                allReviews[review.id] = review
            ));
            return allReviews;
        case CREATE_REVIEW:
            const newReviews = {...state, ...[action.review]};
            console.log(newReviews)
            return newReviews
        default:
            return state;
    }
};

export default reviewsReducer;
