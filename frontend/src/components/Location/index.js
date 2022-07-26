import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
import { loadImages } from '../../store/image';
import { loadLocations, removeLocation } from '../../store/location';
import LocationEdit from '../LocationEdit';
import ReviewCreate from '../ReviewCreate';
import ViewReviews from '../ViewReviews';

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
    console.log(locationImages)
    const handleDelete = (locationId) => {
        if (locationId || backupLocation) {
            const res = dispatch(removeLocation(locationId || backupLocation));
            if (res) history.push('/')
        }
    }
    const formHide = () => {
        const form = document.querySelector('#formHide');
        const button = document.querySelector('#formHide-button');
        // form.setAttribute('style', '');
        button.innerHTML === 'Edit Location' ? button.innerHTML = 'Cancel Edit' : button.innerHTML = 'Edit Location';
        button.innerHTML === 'Edit Location' ? form.setAttribute('style', 'display: none') : form.setAttribute('style', ''); ;

    }

        if (location && locationImages){

            return (
                <div>
                <h1>
                    {location.name}
                </h1>
                {Object.values(locationImages).map(image => (

                    <img src={image.url} key={image.id} />
                ))}
                <p>{location.address}</p>

                <p>{location.city}</p>

                <p>{location.country}</p>

                <p>{location.state}</p>

                <p>{location.legend}</p>
                {user && user.id === location.userId ?
                <>
                <button id='formHide-button' onClick={formHide}>
                    Edit Location
                </button>
                <div id='formHide' style={{'display': 'none'}}>
                <LocationEdit />
                </div>
                </>
                : null
                }
                {user && user.id === location.userId ? <button onClick={() => handleDelete(location ? location.id : backupLocation)}>Delete Location</button> : null}

                {user ? <ReviewCreate /> : null}
                <ViewReviews />

            </div>

            );
        }
};

export default Location;
