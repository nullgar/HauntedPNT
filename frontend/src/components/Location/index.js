import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation, useParams } from 'react-router-dom';
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
    const location = locations[locationId]

    useEffect(() => {
        dispatch(loadLocations())
    }, [dispatch]);
    console.log(location)
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

        if (location){

            return (
                <div>
                <h1>
                    {location.name}
                </h1>
                <p>{location.address}</p>

                <p>{location.city}</p>

                <p>{location.country}</p>

                <p>{location.state}</p>

                <p>{location.legend}</p>
                <button id='formHide-button' style={{display: ''}}  onClick={formHide}>
                    Edit Location
                </button>
                <div id='formHide' style={{display: 'none'}}>
                    <LocationEdit />
                </div>
                {user && user.id === location.userId ? <button onClick={() => handleDelete(location ? location.id : backupLocation)}>Delete Location</button> : null}

                {user ? <ReviewCreate /> : null}
                <ViewReviews />

            </div>

            );
        }
};

export default Location;
