import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createImage } from "../../store/image";
import './LocationImage.css'
const LocationImage = () => {
    const [image, setImage] = useState('');
    const [valErrors, setValErrors] = useState([]);
    const {locationId} = useParams()
    const dispatch = useDispatch();

    const handleImageSubmit = (e) => {
        e.preventDefault();
        const resImage = dispatch(createImage({url: image, locationId}))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setValErrors(data.errors)
        });
    }
    return (
        <div className="createImageFormDiv">
            <ul className="createImageUl">
            {valErrors.map(err => (
                <li className="createImageLi" key={err}>{err}</li>
            ))}
            </ul>
            <form className="createImageForm">
                <label className="createImageFormLabel" htmlFor="image">Upload Image</label>
                <input className="createImageFormInput" name='image' value={image} onChange={(e) => setImage(e.target.value)} required ></input>
                <button className="createImageFormButton" onClick={handleImageSubmit}>Upload</button>
            </form>
        </div>
    )
};

export default LocationImage;
