import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { loadReviews } from "../../store/reviews";

const ViewReviews = () => {
    const {locationId} = useParams()
    const reviews = useSelector(state => state.reviews);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadReviews(locationId))
    }, [dispatch])
    console.log(Object.values(reviews))

    return (
        <>
        <div>
            <h3>See What People Are Saying</h3>
            {reviews ? Object.values(reviews).map(review => (
                <div key={review.id}>
                    <p>{review.User.username}</p>
                    <p>{review.review}</p>
                </div>
            )) : null}


        </div>
        </>
    )
};

export default ViewReviews;
