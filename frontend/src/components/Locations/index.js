import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { loadLocations, test, test2, test3 } from "../../store/location";

const Locations = () => {
    const dispatch = useDispatch();
    const allLocations = useSelector(state => state.locations)


    useEffect(() => {
        dispatch(loadLocations());
    }, [dispatch])
    const handleClick = () => {
        const data = {
            userId: 1,
            address: '1234',
            city: 'Thousand Palms',
            state: 'CA',
            country: 'Unites States',
            name: 'Jon/s Scary Location',
            legend: 'Boo!'
           }
        dispatch(test(data))
    }
    const handleClick2 = () => {
        const locationId = 2;
        const data = {
            userId: 1,
            address: 'Testing',
            city: 'Thousand Palms',
            state: 'CA',
            country: 'Unites States',
            name: 'Jon/s Scary Location',
            legend: 'Boo!'
           }
        dispatch(test2(locationId, data))
    }
    const handleClick3 = () => {
        const locationId = 5;

        dispatch(test3(locationId))
    }
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
                        <Link to={`/location/${location.id}`}>
                            {location.Images['1'] !== undefined ? <img src={location.Images['1'].url} /> : <img src={'https://downtownls.org/wp-content/uploads/coming-soon-450x315.jpg'} />}

                        </Link>
                        <p>{location.city}</p>
                        <p>{location.state}</p>
                        <p>{location.country}</p>


                    </div>
                ))}
                 <div>
            <button
            onClick={() => handleClick()}
            >Click to test Post</button>
            <button
            onClick={() => handleClick2()}
            >Click to test Post Update</button>
            <button
            onClick={() => handleClick3()}
            >Click to test Delete</button>
            </div>
            </div>
        )

    } else {
        return(
            <h1>Error Nothing Loaded</h1>
        )
    }
}

export default Locations;
