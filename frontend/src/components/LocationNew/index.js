import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    const user = useSelector(state => state.session.user);

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = {
            userId: user.id,
            name: name,
            address: address,
            city: city,
            state: state,
            country: country,
            legend: legend
        }

        const res = dispatch(createLocation(data))

        if (res) {
            return history.push('/')
        }

    }



    return (
        <>
        {user ?
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
        : <h3>You must be logged in to create a location!</h3>}
    </>
    )
}


export default LocationNew;
