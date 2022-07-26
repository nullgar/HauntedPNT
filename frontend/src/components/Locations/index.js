import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadLocations, test2, test3 } from "../../store/location";

const Locations = () => {
    const dispatch = useDispatch();
    const allLocations = useSelector(state => state.locations);
    const user = useSelector(state => state.session.user);

    useEffect(() => {
        dispatch(loadLocations());
    }, [dispatch])
    console.log(allLocations)

    if (allLocations) {
        return (
            <div>
                {user ? <button><Link to={'/location/new'}>Add a New Location</Link></button> : null}
                {Object.values(allLocations).map(location => (
                    <div key={location.id + 7}>
                        <h1>
                            <Link to={`/location/${location.id}`}>
                            {location.name}
                            </Link>
                        </h1>
                        {/* <Link to={`/location/${location.id}`}>

                        </Link> */}
                        <p>{location.city}</p>
                        <p>{location.state}</p>
                        <p>{location.country}</p>


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
