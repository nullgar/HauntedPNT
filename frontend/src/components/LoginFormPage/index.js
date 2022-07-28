import React, { useState } from 'react';
import './LoginForm.css';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector(state => state.session.user);
  const [credential, setCredential] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState([]);

  if (sessionUser) return (
    <Redirect to="/" />
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password }))
      .catch(async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      });
  }

  return (
    <div className='loginFormDiv'>

      <form className='loginForm' onSubmit={handleSubmit}>
        <ul className='loginFormUl'>
          {errors.map((error, idx) => <li className='loginFormLi' key={idx}>{error}</li>)}
        </ul>
        <h3 className='loginFormHeader' >Log In</h3>
        <label className='loginFormLabel'>Username or Email</label>
        <input
          type="text"
          value={credential}
          className='loginFormInput'
          onChange={(e) => setCredential(e.target.value)}
          required
          />

        <label className='loginFormLabel'>Password</label>
        <input
          type="password"
          value={password}
          className='loginFormInput'
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className='loginFormButton' type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginFormPage;
