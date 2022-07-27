import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { deleteReview, loadReviews } from "../../store/reviews";
import './ViewReviews.css';

const ViewReviews = () => {
    const {locationId} = useParams()
    const allReviews = useSelector(state => state.reviews);
    const user = useSelector(state => state.session.user);
    const reviews = Object.values(allReviews).filter(review => (
        review.locationId === Number(locationId)
    ));


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviews(locationId))
    }, [dispatch, locationId])


    const handledeleteReview = (reviewId) => {

        dispatch(deleteReview(reviewId))
    }
    return (
        <>
        <div className="viewMainReviewsDiv">

            {reviews.length > 0 ? Object.values(reviews).map(review => (
                <div className="viewReviewsDiv" key={review.id}>
                    <p>{review.User.username}</p>
                    <p>{review.review}</p>
                    <p>{review.rating}/5</p>
                    {user && user.id === review.userId ? <button className="viewReviewsDeleteButton" onClick={() => handledeleteReview(review.id)}>Delete Review</button> : null}
                </div>
            )) : <div className="viewReviewsDiv"><p className="noReviewPTag">No Reviews</p></div>}


        </div>
        </>
    )
};

export default ViewReviews;
