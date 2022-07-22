import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadLocations, test2, test3 } from "../../store/location";

const Locations = () => {
    const dispatch = useDispatch();

    const allLocations = useSelector(state => state.locations)


    useEffect(() => {
        dispatch(loadLocations());
    }, [dispatch])


    if (allLocations) {
        return (
            <div>
                <button><Link to={'/location/new'}>Add a New Location</Link></button>
                {Object.values(allLocations).map(location => (
                    <div key={location.id}>
                        <h1>
                            <Link to={`/location/${location.id}`}>
                            {location.name}
                            </Link>
                        </h1>
                        <Link to={`/location/${location.id}`}>
                            {location.Images['1'] !== undefined ? <img src={location.Images['1'].url} /> : <img src={'https://downtownls.org/wp-content/uploads/coming-soon-450x315.jpg'} />}

                        </Link>
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
