import React from 'react';
import '../homepage.css';
import Navbar1 from "../Navbar"; 
import Bodywork from './Section1_1.jsx';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';
import Section5 from './Section5';
import Section6 from './Section6';

 function Homepage() {
  return(
        <div>
        <div className='section1'>
        <Navbar1 />
        <Bodywork />
        </div>
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
        </div>
  );
}

export default Homepage;
