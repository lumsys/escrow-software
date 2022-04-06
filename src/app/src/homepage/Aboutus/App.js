import React from "react";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";
import Aboutus from "./AboutUs-page/aboutUs";


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/aboutus" element={<Aboutus/>} />
      </Routes>
    </Router>
  );
}

export default App;
