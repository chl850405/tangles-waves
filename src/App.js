import React from "react";
import Welcome from "./pages/Welcome";
import Calendar from "./components/calendar/Calendar";
import Services from "./components/services/Services";
import "./App.css";
import "bootstrap";

function App() {
  return (
    <div>
      <main>
        <Welcome></Welcome>
   
          <Calendar></Calendar>
          <Services></Services>
      
      </main>
    </div>
  );
}

export default App;
