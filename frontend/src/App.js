import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import Location from "./components/Location";
import Locations from "./components/Locations";
import LocationNew from "./components/LocationNew";
import LocationEdit from "./components/LocationEdit";
import Footer from "./components/Footer";
import Page404 from "./components/Page404";
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);


  return (
    <>

      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route exact path='/'>
            <Locations />
          </Route>
          <Route exact path='/location/new'>
            <LocationNew />
          </Route>
          <Route exact path='/location/:locationId'>
            <Location />
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route>
            <Page404 />
          </Route>
        </Switch>
      )}
      <Footer />
    </>
  );
}

export default App;
