import React from 'react';
import './section2.css';
import bt from './images/bt.svg';
import busi from './images/busi.svg';
import PYM from './images/PYM.svg';
import tft from './images/tft.svg';
import sgs from './images/sgs.svg';

export default function Section2() {
  return (<div className="bodied">
        <p style={{fontSize:"23px", paddingTop:"70px"}}>AS FEATURED IN</p>
        <div  style={{ paddingTop:"10px", paddingBottom:"30px"}}>
        <img src={bt} className="col-lg-2 resize3" alt="bt"/>
        <img src={busi} className="col-lg-2 resize"  style={{paddingLeft: "40px"}} alt="bt"/>
        <img src={PYM} className="col-lg-2 resize"  style={{paddingLeft: "40px"}} alt="bt"/>
        <img src={tft} className="col-lg-2 resize2"  style={{paddingLeft: "40px"}} alt="bt"/>
        <img src={sgs} className="col-lg-2 resize"  style={{paddingLeft: "40px"}} alt="bt"/>
        </div>
  </div>);
}
