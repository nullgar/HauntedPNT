import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadImages } from "../../store/image";
import { loadLocations} from "../../store/location";
import NewLocationButton from "../NewLocationButton";
import './Locations.css';

const Locations = () => {
    const dispatch = useDispatch();
    const allLocations = useSelector(state => state.locations);
    const allImages = useSelector(state => state.images);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(loadLocations());
        dispatch(loadImages())
    }, [dispatch])


    if (allLocations && allImages) {
        return (
            <>
            {user ? <NewLocationButton /> : null}
            <div className="mainLocationsDiv">
                {Object.values(allLocations).map(location => {
                    const locationImages = Object.values(allImages).filter(image => (image.locationId === location.id));
                    return (
                        <div className='eachLocationDiv' key={location.id + 7}>
                        <h1 className="mainLocationsHeader">
                            <Link  className='mainLocationsLinks' to={`/location/${location.id}`}>
                            {location.name}
                            </Link>
                        </h1>
                        <Link to={`/location/${location.id}`}>
                            {
                                locationImages.length ?
                                <img className="mainLocationsImage" src={locationImages[0].url} />
                                : null
                            }
                        </Link>
                        <p className="mainLocationsInfo" >{location.city}</p>
                        <p className="mainLocationsInfo" >{location.state}</p>
                        <p className="mainLocationsInfo" >{location.country}</p>


                    </div>
                    )
                })}

            </div>
            </>
        )

    } else {
        return(
            <h1 className="mainLocationsHeader" >Error Nothing Loaded</h1>
        )
    }
}

export default Locations;
