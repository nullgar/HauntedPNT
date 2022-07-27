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
            <h3 className="viewReviewsHeader">See What People Are Saying</h3>
            {reviews ? Object.values(reviews).map(review => (
                <div className="viewReviewsDiv" key={review.id}>
                    <p>{review.User.username}</p>
                    <p>{review.review}</p>
                    <p>{review.rating}/5</p>
                    {user && user.id === review.userId ? <button onClick={() => handledeleteReview(review.id)}>Delete Review</button> : null}
                </div>
            )) : <p>No Reviews</p>}


        </div>
        </>
    )
};

export default ViewReviews;
