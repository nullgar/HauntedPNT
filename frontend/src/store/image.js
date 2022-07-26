import { csrfFetch } from "./csrf"

const CREATE_IMAGE = 'image/CREATE_IMAGE';

const create = (image) => {
    return {
        type: CREATE_IMAGE,
        image
    }
};

export const createImage = (image) => async dispatch => {
    const res = await csrfFetch(`/api/image/`, {
        method: "POST",
        headers: {
            "Content_type": "application/json"
        },
        body: JSON.stringify(
            image
        )
    });

    if (res.ok) {
        const image = await res.json();
        dispatch(create(image));
        return image;
    }
}


const imageReducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_IMAGE:
            const newImages = {...state};
            newImages[action.image.id] = action.image;
            return newImages;
        default:
            return state;
    }
}

export default imageReducer;
