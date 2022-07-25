import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";

import './ReviewCreate.css'
const ReviewCreate = () => {
    const dispatch = useDispatch();
    const {locationId} = useParams();
    // const newReview = useSelector(state => state.review[locationId])
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    let userId = 1;

    // useEffect(() => {
    //     dispatch(createReview())
    // }, [dispatch])

    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const payload = {
            locationId,
            userId,
            review,
            rating,
        }

        dispatch(createReview(payload));
        console.log(payload)
    };

    const handleStars = (e) => {
        const starActive = "rating__star fas fa-star";
        const starInactive = "rating__star far fa-star";
        const value = e.target.id.split(' ')[1];
        const star = document.getElementById(`star ${value}`);
        if (star.className !== `${starActive}`) {
            star.setAttribute('class', `${starActive}`)
        } else {star.setAttribute('class', `${starInactive}`)}


        const ratingStars = [...document.getElementsByClassName('rating__star')];
        let i;

        const starTotal = ratingStars[value - 1];
        ratingStars.forEach(star => {
            const i = starTotal.id.split(' ')[1];
            if (star.id.split(' ')[1] < i) {
                star.setAttribute('class', `${starActive}`)
            }
            if (star.id.split(' ')[1] > i) {
                star.setAttribute('class', `${starInactive}`)
            }
        })


        const totalStars = [...document.getElementsByClassName(starActive)].length;
        setRating(totalStars)
    }






    return (
        <div>
            <form>

                <label htmlFor="review">Please Enter a Review: </label>
                <textarea name='review' value={review} onChange={e => setReview(e.target.value)}></textarea>

                <label></label>

                <div className="rating">
                    <i className="rating__star far fa-star" id={'star 1'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 2'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 3'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 4'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 5'} onClick={handleStars}></i>
                </div>
                <button onClick={handleReviewSubmit}>Submit Review</button>
            </form>
        </div>
    )
};

export default ReviewCreate;
