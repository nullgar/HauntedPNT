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
