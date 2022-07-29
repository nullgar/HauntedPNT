import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import * as sessionActions from '../../store/session'
import './Navigation.css';


function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const demoUserLogin = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.login({
      credential :'ZakBagans',
      password: 'password@11' }))

  }
  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <div className='sessionLinksDiv'>
        <NavLink to="/login" className='sessionLinks'>Log In</NavLink>
        <NavLink to="/signup" className='sessionLinks'>Sign Up</NavLink>
        <button onClick={demoUserLogin} className='demoUserButton'>Demo User</button>
      </div>
    );
  }
    return (
      <div className='mainNavigationBar'>
        <div className='logoDiv'>
          <img src='https://i.imgur.com/SK1vjuo.png' className='logo' />
          <h1 className='navigationHeader'>HauntedPNT</h1>
        </div>
        <nav className='userButtonsMainPage'>
          <NavLink activeClassName="selected" exact to="/" className='homeSessionLink' id='profileHome'>Home</NavLink>
          {isLoaded && sessionLinks}
        </nav>
      </div>
    );
  }



export default Navigation;
