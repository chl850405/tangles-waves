import React from "react";
import Welcome from "./pages/Welcome";
import Calendar from "./components/calendar/Calendar";
import Services from "./components/services/Services";
import Login from "./components/login/Login";
import Logout from "./components/logout/Logout";
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
      
      </main>
    </div>
  );
}

export default App;
