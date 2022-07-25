import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadReviews } from "../../store/reviews";

const ViewReviews = () => {
    const {locationId} = useParams()
    const allReviews = useSelector(state => state.reviews);
    const reviews = Object.values(allReviews).filter(review => (
        review.locationId === Number(locationId)
    ));


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviews(locationId))
    }, [dispatch, locationId])
    return (
        <>
        <div>
            <h3>See What People Are Saying</h3>
            {reviews ? Object.values(reviews).map(review => (
                <div key={review.id}>
                    <p>{review.User.username}</p>
                    <p>{review.review}</p>
                    <p>{review.rating}/5</p>
                </div>
            )) : <p>No Reviews</p>}


        </div>
        </>
    )
};

export default ViewReviews;
