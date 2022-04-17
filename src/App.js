import React from "react";
import Welcome from "./pages/Welcome";
import Calendar from "./components/calendar/Calendar";
import Services from "./components/services/Services";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
import NewAcct from "./components/newAcct/NewAcct";
import Cancel from "./components/cancel/Cancel";
import "./App.css";
import "bootstrap";

function App() {
  return (
    <div>
      <main>
        <Welcome></Welcome>
   
          <Calendar></Calendar>
          <Services></Services>
          <Login></Login>
          <Logout></Logout>
          <NewAcct></NewAcct>
          <Cancel></Cancel>
      
      </main>
    </div>
  );
}

export default App;
