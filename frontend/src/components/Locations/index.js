import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadImages } from "../../store/image";
import { loadLocations} from "../../store/location";

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
            <div>
                {user ? <button><Link to={'/location/new'}>Add a New Location</Link></button> : null}
                {Object.values(allLocations).map(location => {
                    const locationImages = Object.values(allImages).filter(image => (image.locationId === location.id));
                    return (
                    <div key={location.id + 7}>
                        <h1>
                            <Link to={`/location/${location.id}`}>
                            {location.name}
                            </Link>
                        </h1>
                        <Link to={`/location/${location.id}`}>
                            {
                                locationImages.length ?
                                <img src={locationImages[0].url} />
                                : null
                            }
                        </Link>
                        <p>{location.city}</p>
                        <p>{location.state}</p>
                        <p>{location.country}</p>


                    </div>
                    )
                    })}

            </div>
        )

    } else {
        return(
            <h1>Error Nothing Loaded</h1>
        )
    }
}

export default Locations;
