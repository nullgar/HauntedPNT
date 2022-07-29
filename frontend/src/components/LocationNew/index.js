import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { createLocation} from "../../store/location";
import './LocationNew.css';

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

        if (res) {
            return history.push('/')
        }
        if (!user) history.push('/')
    }



    return (
        <div className="newLocationFormDiv">
        {user ?
        <form className="newLocationForm" onSubmit={handleSubmit}>
            <ul className="newLocationUl">
            {valErrors.map(err => (
                <li className="newLocationLi" key={err}>{err}</li>
            ))}
            </ul>
            <h3 className="newLocationFormHeader" >Create A New Location</h3>
            <label className="newLocationLabel" htmlFor='name'>Name</label>
            <input className="newLocationInput" name='name' value={name} onChange={(e) => setName(e.target.value)} required ></input>

            <label className="newLocationLabel" htmlFor='address'>Address</label>
            <input className="newLocationInput" name='address' value={address} onChange={(e) => setAddress(e.target.value)} required ></input>

            <label className="newLocationLabel" htmlFor="city">City</label>
            <input className="newLocationInput" name='city' value={city} onChange={(e) => setCity(e.target.value)} required ></input>

            <label className="newLocationLabel" htmlFor="state">State</label>
            <input className="newLocationInput" name='state' value={state} onChange={(e) => setState(e.target.value)} required ></input>

            <label className="newLocationLabel" htmlFor="country">Country</label>
            <input className="newLocationInput" name='country' value={country} onChange={(e) => setCountry(e.target.value)} required ></input>

            <label  className="newLocationLabel" htmlFor="legend">Legend</label>
            <textarea className="newLocationTextArea" name='legend' value={legend} onChange={(e) => setLegend(e.target.value)} required ></textarea>
            <button className="newLocationButton" >Submit</button>
        </form>
        : <div className="notLoggedInDiv" ><h1>You need to be Logged In to Create a Location!</h1></div>}
        </div>
    )
}


export default LocationNew;
