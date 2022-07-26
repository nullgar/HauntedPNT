import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createLocation} from "../../store/location";

const LocationNew = () => {
    const [name, setName] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')
    const [legend, setLegend] = useState('')
    const [valErrors, setValErrors] = useState([])
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

        const res = await dispatch(createLocation(data))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) setValErrors(data.errors);
            });


        ;
        // console.log(res)

        // const res = await dispatch(createLocation(data))
        //
        if (res) {
            return history.push('/')
        }

    }



    return (
        <div>
        <ul>
            {valErrors.map(err => (
                <li key={err}>{err}</li>
            ))}
        </ul>
        {user ?
        <form onSubmit={handleSubmit}>
            <label htmlFor='name'>Name</label>
            <input name='name' value={name} onChange={(e) => setName(e.target.value)} required ></input>

            <label htmlFor='address'>Address</label>
            <input name='address' value={address} onChange={(e) => setAddress(e.target.value)} required ></input>

            <label htmlFor="city">City</label>
            <input name='city' value={city} onChange={(e) => setCity(e.target.value)} required ></input>

            <label htmlFor="state">State</label>
            <input name='state' value={state} onChange={(e) => setState(e.target.value)} required ></input>

            <label htmlFor="country">Country</label>
            <input name='country' value={country} onChange={(e) => setCountry(e.target.value)} required ></input>

            <label htmlFor="legend">Legend</label>
            <textarea name='legend' value={legend} onChange={(e) => setLegend(e.target.value)} required ></textarea>
            <button>Submit</button>
        </form>
        : <h3>You must be logged in to create a location!</h3>}
        </div>
    )
}


export default LocationNew;
