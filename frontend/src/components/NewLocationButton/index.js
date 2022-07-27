import { Link } from "react-router-dom";
import './NewLocationButton.css'
const NewLocationButton = () => {
    return (
        <div className="newLocationButtonDiv">
            <button className="newLocationButton"><Link className='newLocationLink' to={'/location/new'}>Add a New Location</Link></button>
        </div>
    )
}

export default NewLocationButton;
