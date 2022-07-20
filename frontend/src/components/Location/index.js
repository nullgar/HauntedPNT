import React from 'react';
import { useDispatch } from 'react-redux';
import { test } from '../../store/location';

const Location = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        const data = {
            userId: 1,
            address: '1234',
            city: 'Thousand Palms',
            state: 'CA',
            country: 'Unites States',
            name: 'Jon/s Scary Location',
            legend: 'Boo!'
           }
        dispatch(test(data))
    }
    return (
        <div>
            <button
            onClick={() => handleClick()}
            >Click</button>
        </div>
  );
};

export default Location;
