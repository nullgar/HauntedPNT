import { csrfFetch } from "./csrf"

const LOAD_LOCATIONS = 'location/LOAD_LOCATIONS';

const load = (locations) => {
    return {
        type: LOAD_LOCATIONS,
        locations
    }
}

export const loadLocations = (locations) => async dispatch => {
    const res = await csrfFetch(`/api/location`);

    if (res.ok) {
        const locations = await res.json();
        dispatch(load(locations));
        return locations;
    }
}
export const test = (location) => async (dispatch) => {
    const res = await csrfFetch('/api/location/', {
        method: 'POST',
        body: JSON.stringify(
            location
        )
    });

    if (res.ok) {
        const data = await res.json();
        console.log(data);
    }

}
export const test2 = (locationId, data) => async (dispatch) => {
    console.log(locationId, data)
    const res = await csrfFetch(`/api/location/${locationId}`, {
        method: 'PUT',
        body: JSON.stringify(
            data
        )
    });

    if (res.ok) {
        const data = await res.json();
        console.log(data);
    }

}
export const test3 = (locationId) => async (dispatch) => {
    // console.log(locationId)
    const res = await csrfFetch(`/api/location/${locationId}`, {
        method: 'DELETE',

    });

    if (res.ok) {
        const data = await res.json();
        console.log('result ----', data);
    }

}

const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_LOCATIONS:
            const loadedLocations = {...state};
            const images = {};
            const finalLocations = {...state}

            action.locations.forEach(location => {
                loadedLocations[location.id] = location

                loadedLocations[location.id].Images.forEach(image => {
                    images[image.id] = image
                    if (location.id === image.locationId) {
                        loadedLocations[location.id].Images = images
                    }
                })
            })

            return loadedLocations;
        default:
            return state;
    }

}

export default locationReducer;
