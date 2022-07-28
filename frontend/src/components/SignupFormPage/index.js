import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import * as sessionActions from "../../store/session";

import './SignupForm.css';

function SignupFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      setErrors([]);
      return dispatch(sessionActions.signup({ email, username, password }))
        .catch(async (res) => {
          const data = await res.json();
          if (data && data.errors) setErrors(data.errors);
        });
    }
    return setErrors(['Confirm Password field must be the same as the Password field']);
  };

  return (
    <div className="signUpFormDiv">

      <form className="signUpForm" onSubmit={handleSubmit}>
        <ul className="signUpFormUl" >
          {errors.map((error, idx) => <li className="signUpFormLi" key={idx}>{error}</li>)}
        </ul>
        <h3 className="signUpFormHeader">Signup</h3>
        <label className="signUpFormLabel" >Email</label>
        <input
          type="text"
          value={email}
          className="signUpFormInput"
          onChange={(e) => setEmail(e.target.value)}
          required />

        <label className="signUpFormLabel" >Username</label>
        <input
          type="text"
          value={username}
          className="signUpFormInput"
          onChange={(e) => setUsername(e.target.value)}
          required />


        <label className="signUpFormLabel" >Password</label>
          <input
            type="password"
            value={password}
            className="signUpFormInput"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

        <label className="signUpFormLabel" >Confirm Password</label>
          <input
            type="password"
            value={confirmPassword}
            className="signUpFormInput"
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

        <button className="signUpFormButton" type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default SignupFormPage;
