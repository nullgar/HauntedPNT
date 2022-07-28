import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { loadImages } from '../../store/image';
import { loadLocations, removeLocation } from '../../store/location';
import LocationEdit from '../LocationEdit';
import LocationImage from '../LocationImage';
import ReviewCreate from '../ReviewCreate';
import ViewReviews from '../ViewReviews';
import './Location.css'

const Location = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {locationId} = useParams();
    const backup = useLocation();
    const backupLocation = backup.pathname.split('/')[2];
    const locations = useSelector(state => state.locations);
    const user = useSelector(state => state.session.user);
    const location = locations[locationId];
    const allImages = useSelector(state => state.images);
    const locationImages = Object.values(allImages).filter(image => image.locationId === Number(locationId));

    useEffect(() => {
        dispatch(loadLocations());
        dispatch(loadImages());
    }, [dispatch]);
    const handleDelete = (locationId) => {
        if (locationId || backupLocation) {
            const res = dispatch(removeLocation(locationId || backupLocation));
            if (res) history.push('/')
        }
    }
    const formHide = () => {
        const form = document.querySelector('#formHide');
        const button = document.querySelector('#formHide-button');
        const deleteButton = document.querySelector('#hideDeleteButton');
        // form.setAttribute('style', '');
        button.innerHTML === 'Edit Location' ? button.innerHTML = 'Cancel Edit' : button.innerHTML = 'Edit Location';
        button.innerHTML === 'Edit Location' ? form.setAttribute('class', 'hideLocationItems') : form.setAttribute('class', 'unhideLocationItems'); ;
        button.innerHTML === 'Cancel Edit' ? deleteButton.setAttribute('class', 'hideLocationItems') : deleteButton.setAttribute('class', 'locationDeleteButton'); ;

    }

        if (location && locationImages){

            return (
                <div className='locationMainDiv'>

                <div className='locationTopDiv'>

                <div className='locationInfo'>
                    <h1 className='locationHeaders'>
                        {location.name}
                    </h1>
                    <p className='locationPTags'>{location.address},  {location.city},  {location.country}</p>

                    <p className='locationPTags'>{location.state}, {location.country}</p>

                    <p className='locationPTags'>{location.legend}</p>
                    {user && user.id === location.userId ?
                    <>
                    <div className='locationButton'>

                    <button id='formHide-button' className='formHide-Button' onClick={formHide}>
                        Edit Location
                    </button>
                    <div id='formHide' className='hideLocationItems' >
                    <LocationEdit />
                    </div>
                    {user && user.id === location.userId ? <button id='hideDeleteButton' className='locationDeleteButton'  onClick={() => handleDelete(location ? location.id : backupLocation)}>Delete Location</button> : null}
                    </div>
                    </>
                    : null
                    }
                </div>
                <div className='locationImagesDiv'>
                    {Object.values(locationImages).map(image => (
                        <img className='locationImages' src={image.url} key={image.id} />
                        ))}
                </div>
                {!locationImages.length ? <LocationImage /> : null}
                </div>



                <div className='masterCreateReviewDiv'>

                    {user ?<div className='locationCreateReviewDiv'> <ReviewCreate />
                        </div>

                    : null}
                    <div className='locationReviewMasterDiv'>

                    <h3 className="viewReviewsHeader">See What People Are Saying</h3>
                    <div className='locationViewReviewsDiv'>
                        <ViewReviews />

                    </div>
                    </div>
                </div>

            </div>

            );
        }
};

export default Location;
