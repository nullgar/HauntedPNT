import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createReview } from "../../store/reviews";

import './ReviewCreate.css'
const ReviewCreate = () => {
    const dispatch = useDispatch();
    const {locationId} = useParams();
    const [review, setReview] = useState('');
    const [rating, setRating] = useState(0);
    const [valErrors, setValErrors] = useState([])
    const user = useSelector(state => state.session.user);



    const handleReviewSubmit = (e) => {
        e.preventDefault();

        const payload = {
            locationId,
            userId: user.id,
            review,
            rating,
        }

        const res = dispatch(createReview(payload))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setValErrors(data.errors)
        });
        if (res) {
            setValErrors([])
            setReview('');
            setRating(0)
            resetStars()
        }

    };

    const handleStars = (e) => {
        const starActive = "rating__star fas fa-star";
        const starInactive = "rating__star far fa-star";
        const value = e.target.id.split(' ')[1];
        const star = document.getElementById(`star ${value}`);
        if (star.className !== `${starActive}`) {
            star.setAttribute('class', `${starActive}`)
        }



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

    const resetStars = () => {
        const starInactive = "rating__star far fa-star";
        const ratingStars = [...document.getElementsByClassName('rating__star')];
        ratingStars.forEach(star => {
            star.setAttribute('class', `${starInactive}`)
        })

    }





    return (
        <div className="reviewMasterDiv">
            <ul className="reviewCreateUl">
                {valErrors.map(err => (
                    <li className="reviewCreateLi" key={err}>{err}</li>
                ))}
            </ul>
            <form className="createReviewForm">
                <label className='reviewCreateText' htmlFor="review" >Please Enter a Review: </label>
                <textarea className="reviewCreateTextArea" name='review' value={review} onChange={e => setReview(e.target.value)}></textarea>


                <div className="rating">
                    <label className='reviewCreateText' >Rating: </label>
                    <i className="rating__star far fa-star" id={'star 1'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 2'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 3'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 4'} onClick={handleStars}></i>
                    <i className="rating__star far fa-star" id={'star 5'} onClick={handleStars}></i>
                </div>
                <button className="reviewCreateSubmitButton" onClick={handleReviewSubmit}>Submit Review</button>
            </form>
        </div>
    )
};

export default ReviewCreate;
