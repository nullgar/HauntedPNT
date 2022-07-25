import { useDispatch } from "react-redux";
import { login } from "../../store/session";


const DemoUserButton = () => {
    const dispatch = useDispatch();

    const handleDemoUser = (e) => {
        e.preventDefault();


        const payload = {
            credential :'ZakBagans',
            password: 'password@11'
        };

        dispatch(login(payload))
    }
    return (
        <button type="button" onClick={handleDemoUser}>Demo User</button>
    )
};


export default DemoUserButton;
