import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadLocations } from "../../store/location";

const Locations = () => {
    const dispatch = useDispatch();
    const allLocations = useSelector(state => state.locations)


    useEffect(() => {
        dispatch(loadLocations());
    }, [dispatch])

    if (allLocations) {
        return (
            <div>
                {Object.values(allLocations).map(location => (
                    <div key={location.id}>
                        <h1>
                            <Link to={`/location/${location.id}`}>
                            {location.name}
                            </Link>
                        </h1>
                        <p>{location.address}</p>

                        <p>{location.city}</p>

                        <p>{location.country}</p>

                        <p>{location.state}</p>

                        <p>{location.legend}</p>


                    </div>
                ))}
            </div>
        )

    } else {
        return(
            <h1>Error Nothing Loaded</h1>
        )
    }
}

export default Locations;
