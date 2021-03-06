import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useLocation, useParams } from "react-router-dom"
import { loadLocations, updateLocation } from "../../store/location";
import './LocationEdit.css'

const LocationEdit = () => {
    const {locationId} = useParams();
    const backup = useLocation();
    const backupLocation = backup.pathname.split('/')[2];
    const location = useSelector(state => state.locations[locationId]);
    const user = useSelector(state => state.session.user);
    const [name, setName] = useState(location ? location.name : '')
    const [address, setAddress] = useState(location ? location.address : '')
    const [city, setCity] = useState(location ? location.city : '')
    const [state, setState] = useState(location ? location.state : '')
    const [country, setCountry] = useState(location ? location.country : '')
    const [legend, setLegend] = useState(location ? location.legend : '')
    const [valErrors, setValErrors] = useState([])
    const dispatch = useDispatch();
    const history = useHistory()


    useEffect(() => {
        dispatch(loadLocations())
    }, [dispatch])


    const handleEdit = async (e) => {
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

        const formHide = () => {

            const form = document.querySelector('#formHide');
            const button = document.querySelector('#formHide-button');
            const deleteButton = document.querySelector('#hideDeleteButton');
            button.innerHTML === 'Edit Location' ? button.innerHTML = 'Cancel Edit' : button.innerHTML = 'Edit Location';
            button.innerHTML === 'Edit Location' ? form.setAttribute('class', 'hideLocationItems') : form.setAttribute('class', 'unhideLocationItems') ;
            button.innerHTML === 'Cancel Edit' ? deleteButton.setAttribute('class', 'hideLocationItems') : deleteButton.setAttribute('class', 'locationDeleteButton'); ;


        }

        const res = await dispatch(updateLocation({locationId, data}))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) {setValErrors(data.errors)}

        });


        if (res) {
            setValErrors([])
            formHide();
        }


    }

    return (
        <div>
            <ul className="editLocationUl">
                {valErrors.map(err => (
                    <li className="editLocationLi" key={err}>{err}</li>
                ))}
            </ul>
        {location ?
        <div className="editLocationFormDiv">

        <form className="editLocationForm" onSubmit={handleEdit}>
        <label className='editLocationLabel' htmlFor='name'>Name</label>
        <input className='editLocationText' name='name' value={name} onChange={e => setName(e.target.value)} required ></input>

        <label className='editLocationLabel' htmlFor='address'>Address</label>
        <input className='editLocationText' name='address' value={address} onChange={(e) => setAddress(e.target.value)} required ></input>

        <label className='editLocationLabel' htmlFor="city">City</label>
        <input className='editLocationText' name='name' value={city} onChange={(e) => setCity(e.target.value)} required ></input>

        <label className='editLocationLabel' htmlFor="state">State</label>
        <input className='editLocationText' name='name' value={state} onChange={(e) => setState(e.target.value)} required ></input>

        <label className='editLocationLabel' htmlFor="country">Country</label>
        <input className='editLocationText' name='name' value={country} onChange={(e) => setCountry(e.target.value)} required ></input>

        <label className='editLocationLabel' htmlFor="legend">Legend</label>
        <textarea className='editLocationTextArea' name='name' value={legend} onChange={(e) => setLegend(e.target.value)} required ></textarea>

        <button className='editLocationSubmitButton' >Submit</button>
        </form>

        </div>
    : <h1>Please go back home!</h1>}
    </div>
    )
}

export default LocationEdit;
