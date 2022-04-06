import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Market from './homepage/Market/Market';
import Resources from './homepage/Resources/ResourceCenter';
import Aboutus from './homepage/Aboutus/AboutUs-page/aboutUs';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path='/' element={<Market />}></Route>
        <Route path='/aboutus' element={<Resources />}></Route>
        <Route path="/resource" element={<Aboutus/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
