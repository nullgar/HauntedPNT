import { csrfFetch } from "./csrf";

const LOAD_REVIEWS = 'reviews/LOAD_REVIEWS';
const CREATE_REVIEW = 'reviews/CREATE_REVIEW';
const DELETE_REVIEW = 'reviews/DELETE_REVIEW';


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
const remove = (reviewId) => {
    return {
        type: DELETE_REVIEW,
        reviewId
    }
}

export const loadReviews = () => async dispatch => {

    const res = await csrfFetch(`/api/review/`);

    if (res.ok) {
        const reviews = await res.json();
        dispatch(load(reviews));
        return reviews;
    }
};

export const createReview = (review, locationId) => async dispatch => {

    const res = await csrfFetch(`/api/review/new/`, {
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

export const deleteReview = (reviewId) => async dispatch => {

    const res = await csrfFetch(`/api/review/${reviewId}/`, {
        method: 'DELETE'
    });
    if (res.ok) {
        const review = await res.json();
        dispatch(remove(review.id));
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
            const newReviews = {...state};
            newReviews[action.review.id] = action.review
            return newReviews
        case DELETE_REVIEW:
            const finalReviews = {...state};
            console.log(finalReviews)
            delete finalReviews[action.reviewId];
            console.log(finalReviews)
            return finalReviews
        default:
            return state;
    }
};

export default reviewsReducer;
