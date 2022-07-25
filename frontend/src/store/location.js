import { csrfFetch } from "./csrf"

const LOAD_LOCATIONS = 'location/LOAD_LOCATIONS';
const CREATE_LOCATIONS = 'location/CREATE_LOCATIONS';
const UPDATE_LOCATIONS = 'location/UPDATE_LOCATIONS';
const REMOVE_LOCATION = 'location/REMOVE_LOCATION';

const create = (newLocations) => {
    return {
        type: CREATE_LOCATIONS,
        newLocations
    }
}
const update = (oldLocation, data) => {
    return {
        type: UPDATE_LOCATIONS,
        oldLocation,
        data
    }
}
const load = (locations) => {
    return {
        type: LOAD_LOCATIONS,
        locations
    }
}
const remove = (locationId) => {
    return {
        type: REMOVE_LOCATION,
        locationId
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
export const createLocation = (location) => async (dispatch) => {

    const res = await csrfFetch('/api/location/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            location
        )
    });

    if (res.ok) {
        const locationsList = await res.json();
        dispatch(create(locationsList))
    }

}
export const updateLocation = ({locationId, data}) => async (dispatch) => {
    const res = await csrfFetch(`/api/location/${locationId}`, {
        method: 'PUT',
        body: JSON.stringify(
            data
        )
    });

    if (res.ok) {
        const oldLocation = await res.json();
        dispatch(update(oldLocation, data))
    }

}
export const removeLocation = (locationId) => async (dispatch) => {
    // console.log(locationId)
    const res = await csrfFetch(`/api/location/${locationId}`, {
        method: 'DELETE',
    });

    if (res.ok) {
        const removedLocation = await res.json();
        dispatch(remove(removedLocation.id))
    }

}

const locationReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD_LOCATIONS:
            const loadedLocations = {...state};
            const images = {};
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
        case CREATE_LOCATIONS:
            const newLoadedLocations = {...state};
            const newImages = {};
            action.newLocations.forEach(location => {
                newLoadedLocations[location.id] = location

                newLoadedLocations[location.id].Images.forEach(image => {
                    newImages[image.id] = image
                    if (location.id === image.locationId) {
                        newLoadedLocations[location.id].Images = newImages
                    }
                })
            })
            return newLoadedLocations;
        case REMOVE_LOCATION:
            const removedLocations = {...state}
            delete removedLocations[action.locationId]
            return removedLocations;
        case UPDATE_LOCATIONS:
            const locationList = {...state}
            const updateImages = {...locationList[action.oldLocation.id].Images};
            locationList[action.oldLocation.id] = action.data
            locationList[action.oldLocation.id].Images = updateImages

            const finalLocations = {...locationList}
            return finalLocations;
        default:
            return state;
    }

}

export default locationReducer;
