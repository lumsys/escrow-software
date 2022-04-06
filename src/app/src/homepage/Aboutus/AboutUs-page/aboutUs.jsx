import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons'
import './aboutUs.css';
import Sec1 from "./about-head-info/abouthead-info";
import Sec2 from "./founders-section/founders";
import Navbar1 from "../../Navbar"; 
import Section6 from "../../Market/Section6";


function Aboutus(){
    return(
        <body >
            {/* <!-- About us page --> */}
            
            <section className="about-head">
            <Navbar1 />
                <h1 className="h1 text-lg-center text-md-start text-white about-h1 p-3">About us</h1>
            </section>
            <Sec1 />
            <Sec2 />
            <Section6/>
        </body>
    );
}
export default Aboutus;