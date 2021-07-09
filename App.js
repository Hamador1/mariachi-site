import './App.css';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import StartNewBooking from "./components/start-new-booking.component";
import GoogleMapsPlaces from "./components/GoogleMapsPlaces.component";
import "bootstrap/dist/css/bootstrap.min.css"
import "react-datepicker/dist/react-datepicker.css";
import HomePage from "./HomePage/home-page.component";
import Dashboard from "./Dashboard/dashboard";
import {useState} from "react";
import { AuthProvider} from "./contexts/AuthContext";

function App() {

  return (
      <>
        <Router>
          <AuthProvider>
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            {/*<Route path="/signin" component={ContactInfo} />*/}
            {/*<Route path="/link-signin" component={LinkSignin} />*/}
            <Route exact path="/start-new-booking" component={StartNewBooking}/>\
            <Route path="/map" component={GoogleMapsPlaces}/>
              <Route path="/" component={HomePage}/>
          </Switch>
          </AuthProvider>
        </Router>


      </>
  );
}

export default App;
