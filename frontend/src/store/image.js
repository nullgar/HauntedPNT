import { csrfFetch } from "./csrf"

const LOAD_IMAGES = 'image/LOAD_IMAGES';
const CREATE_IMAGE = 'image/CREATE_IMAGE';

const load = (images) => {
    return {
        type: LOAD_IMAGES,
        images
    }
}
const create = (image) => {
    return {
        type: CREATE_IMAGE,
        image
    }
};

export const loadImages = () => async dispatch => {
    const res = await csrfFetch(`/api/image/`);
    console.log('load image fires off')
    if (res.ok) {
        const images = await res.json();
        dispatch(load(images));
        return images;
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
        case LOAD_IMAGES:
            const allImages = {...state};
            action.images.forEach(image => (

                allImages[image.id] = image
            ))
            return allImages;
        case CREATE_IMAGE:
            const newImages = {...state};


            newImages[action.image.id] = action.image;

            return newImages;
        default:
            return state;
    }
}

export default imageReducer;
