import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useParams } from 'react-router-dom';
import { loadLocations, removeLocation, test, test2, test3 } from '../../store/location';

const Location = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const {locationId} = useParams();
    const locations = useSelector(state => state.locations);
    const location = locations[locationId]
    useEffect(() => {
        dispatch(loadLocations())
    }, [dispatch])
    const handleDelete = (locationId) => {


        const res = dispatch(removeLocation(locationId));
        if (res) history.push('/')
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
                <button onClick={() => handleDelete(location.id)}>Delete Location</button>

            </div>

            );
        }
};

export default Location;




// to add new location code below
//      const handleClick = () => {
//     const data = {
//         userId: 1,
//         address: '1234',
//         city: 'Thousand Palms',
//         state: 'CA',
//         country: 'Unites States',
//         name: 'Jon/s Scary Location',
//         legend: 'Boo!'
//        }
//     dispatch(test(data))
// }
// const handleClick2 = () => {
//     const locationId = 2;
//     const data = {
//         userId: 1,
//         address: 'Testing',
//         city: 'Thousand Palms',
//         state: 'CA',
//         country: 'Unites States',
//         name: 'Jon/s Scary Location',
//         legend: 'Boo!'
//        }
//     dispatch(test2(locationId, data))
// }
// const handleClick3 = () => {
//     const locationId = 2;

//     dispatch(test3(locationId))
// }

// <div>
        //     <button
        //     onClick={() => handleClick()}
        //     >Click to test Post</button>
        //     <button
        //     onClick={() => handleClick2()}
        //     >Click to test Post Update</button>
        //     <button
        //     onClick={() => handleClick3()}
        //     >Click to test Delete</button>
        // </div>
