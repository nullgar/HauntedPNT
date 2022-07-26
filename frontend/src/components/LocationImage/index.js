import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createImage } from "../../store/image";

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
        <div>
            <ul>
            {valErrors.map(err => (
                <li key={err}>{err}</li>
            ))}
            </ul>
            <form>
                <label htmlFor="image">Image</label>
                <input name='image' value={image} onChange={(e) => setImage(e.target.value)} required ></input>
                <button onClick={handleImageSubmit}>Create Image</button>
            </form>
        </div>
    )
};

export default LocationImage;
