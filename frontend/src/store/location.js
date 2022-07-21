import { csrfFetch } from "./csrf"

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
