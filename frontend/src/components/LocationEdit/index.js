import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { loadLocations, updateLocation } from "../../store/location";

const LocationEdit = () => {
    const {locationId} = useParams();
    const backup = useLocation();
    const backupLocation = backup.pathname.split('/')[2];
    const location = useSelector(state => state.locations[locationId]);

    const [name, setName] = useState(location ? location.name : '')
    const [address, setAddress] = useState(location ? location.address : '')
    const [city, setCity] = useState(location ? location.city : '')
    const [state, setState] = useState(location ? location.state : '')
    const [country, setCountry] = useState(location ? location.country : '')
    const [legend, setLegend] = useState(location ? location.legend : '')
    const dispatch = useDispatch();
    const history = useHistory()


    useEffect(() => {
        dispatch(loadLocations())
    }, [dispatch])


    const handleEdit = (e) => {
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

        const formHide = () => {
            const form = document.querySelector('#formHide');
            const button = document.querySelector('#formHide-button');
            // form.setAttribute('style', '');
            button.innerHTML === 'Edit Location' ? button.innerHTML = 'Cancel Edit' : button.innerHTML = 'Edit Location';
            button.innerHTML === 'Edit Location' ? form.setAttribute('style', 'display: none') : form.setAttribute('style', ''); ;

        }
        const res = dispatch(updateLocation({locationId, data}))

        if (res) {
            formHide();

        }

    }

    return (
        location ?
        <form onSubmit={handleEdit}>
        <label htmlFor='name'>Name</label>
        <input name='name' value={name} onChange={e => setName(e.target.value)}></input>

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

    : <h1>wait</h1>

    )
}

export default LocationEdit;
