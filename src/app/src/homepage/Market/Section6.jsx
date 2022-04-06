import React from 'react';
import tazapay from './images/tazapay.svg';
import './section2.css';
import {AiOutlineCopyrightCircle} from "react-icons/ai";
import {AiFillFacebook} from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import Paythru from "../../paythru.png";


export default function Section6() {
  return (<div>
  <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", width: "90%", margin:"70px auto", color: "rgb(47, 99, 119)"}}>
    <img src={Paythru} className="logopay" alt="logo" />
    <div className="row" style={{textDecoration:"none"}}>
        <div className="col-lg-3 col-md-6"><ul>
            <li><strong>Payment</strong></li>
            <li>Payment links</li>
        </ul>
        </div>
        <div className="col-lg-3 col-md-6">
        <ul >
            <li><strong>Escrow</strong></li>
            <li>Escrow for exports and imports</li>
        </ul>
        </div>
        <div className="col-lg-3 col-md-6">
        <ul >
            <li><strong>Resources</strong></li>
            <li>Resource centre</li>
        </ul>
        </div>
        <div  className="col-lg-3 col-md-6">
        <ul>
            <li><strong>About us</strong></li>
            <li>Team</li>
            <li>Review and testimonials</li>
        </ul>
        </div>
    </div>
  </div>
  <hr />
  <div style={{width:"90%", margin:"10px auto", display:"flex", justifyContent:"space-between"}}>
      <div style={{display:"flex", color: "rgb(47, 99, 119)"}}>
          <p><AiOutlineCopyrightCircle /></p>
          <p>2021 Paythru. All right reserved.</p>
          <p style={{marginLeft:"40px"}}>Privacy Policy</p>
          <p style={{marginLeft:"40px"}}>Terms of Service</p>
      </div>
      <div style={{display:"flex", color: "rgb(47, 99, 119)", fontSize:"30px"}}>
      <p><AiFillFacebook/></p>
      <p><AiFillLinkedin/></p>
      </div>
  </div>
  </div>
  );
}
