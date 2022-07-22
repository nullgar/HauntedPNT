import React from 'react';
import { useDispatch } from 'react-redux';
import { test, test2, test3 } from '../../store/location';

const Location = () => {
    const dispatch = useDispatch();

    return (
        <div>

        </div>

  );
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
