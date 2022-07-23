import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createLocation, test2, test3 } from "../../store/location";

const LocationNew = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [legend, setLegend] = useState('')
    const dispatch = useDispatch();
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            userId: 1,
            name: name,
            address: address,
            city: city,
            state: state,
            country: country,
            legend: legend
        }

        const res = dispatch(createLocation(data))
        console.log(res);

        if (res) {
            return history.push('/')
        }

    }
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
    //     const locationId = 5;

    //     dispatch(test3(locationId))
    // }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)}></input>

            <label htmlFor='address'>Address</label>
            <input name='address' value={address} onChange={(e) => setAddress(e.target.value)}></input>

            <label>City</label>
            <input name='name' value={city} onChange={(e) => setCity(e.target.value)}></input>

            <label>State</label>
            <input name='name' value={state} onChange={(e) => setState(e.target.value)}></input>

            <label>Country</label>
            <input name='name' value={country} onChange={(e) => setCountry(e.target.value)}></input>

            <label>Legend</label>
            <textarea name='name' value={legend} onChange={(e) => setLegend(e.target.value)}></textarea>
            <button>Submit</button>
        </form>
    )
}


export default LocationNew;


{/* <div>
        <button
        onClick={() => handleClick()}
        >Click to test Post</button>
        <button
        onClick={() => handleClick2()}
        >Click to test Post Update</button>
        <button
        onClick={() => handleClick3()}
        >Click to test Delete</button>
</div> */}
