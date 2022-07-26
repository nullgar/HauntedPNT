import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createImage } from "../../store/image";
import { createLocation, test2, test3 } from "../../store/location";

const LocationNew = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [legend, setLegend] = useState('')
    const [image, setImage] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()

    const user = useSelector(state => state.session.user);

    const handleSubmit = async (e) => {
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

        const res = await dispatch(createLocation(data));
        // console.log(res)
        const resImage = dispatch(createImage({url: image, locationId: res.id}));

        if (res, resImage) {
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

            <label htmlFor="city">City</label>
            <input name='city' value={city} onChange={(e) => setCity(e.target.value)}></input>

            <label htmlFor="state">State</label>
            <input name='state' value={state} onChange={(e) => setState(e.target.value)}></input>

            <label htmlFor="country">Country</label>
            <input name='country' value={country} onChange={(e) => setCountry(e.target.value)}></input>

            <label htmlFor="legend">Legend</label>
            <textarea name='legend' value={legend} onChange={(e) => setLegend(e.target.value)}></textarea>

            <label htmlFor="image">Image</label>
            <input name='image' value={image} onChange={(e) => setImage(e.target.value)}></input>

            <button>Submit</button>
        </form>
        : <h3>You must be logged in to create a location!</h3>}
    </>
    )
}


export default LocationNew;
