import React from 'react';
import './section2.css';
import line from './images/line.svg';

export default function Section3() {
  return (<div>
  <div>
    <h1 className="specially" style={{paddingTop: "40px"}}>Specially designed solutions for</h1>
    <div className='row'>
    <div className="sec4 col-lg-4" style={{paddingLeft: "65px", paddingTop: "30px"}}>
    <div style={{display: "flex"}}>
    <img src={line} alt="green line"/>
      <h3 style={{paddingLeft: "20px", color: "rgba(38,83,107)"}}>Importers and Exporters</h3>
      </div>
            <p style={{paddingLeft: "25px", fontWeight: "bold", color: "rgba(39,48,63)", fontSize:"17px"}}>Get the same protection as with Letter of Credit but cheaper and faster</p>
            <p style={{paddingLeft: "25px", fontSize:"17px"}}>Equal protection for exporters and importers</p>
        
        </div>
        <div className="sec41 col-lg-4" style={{ paddingTop: "30px"}}>
    <div style={{display: "flex"}}>
    <img src={line} alt="green line"/>
      <h3 style={{paddingLeft: "20px", color: "rgba(38,83,107)"}}>Service Providers</h3>
      </div>
            <p style={{paddingLeft: "25px", fontWeight: "bold", color: "rgba(39,48,63)", fontSize:"17px"}}>Avoid non-payment risks from your overseas clients.</p>
            <p style={{paddingLeft: "25px", fontSize:"17px"}}>Get paid upon verification of service delivery</p>
        
        </div>
        <div className="col-lg-4" style={{paddingLeft: "65px", paddingTop: "30px", paddingBottom:"30px", paddingRight:"20px"}}>
    <div style={{display: "flex"}}>
    <img src={line} alt="green line"/>
      <h3 style={{paddingLeft: "20px", color: "rgba(38,83,107)"}}>Market Places</h3>
      </div>
            <p style={{paddingLeft: "25px", fontWeight: "bold", color: "rgba(39,48,63)", fontSize:"17px"}}>Enhance your business model with a transactional marketplace</p>
            <p style={{paddingLeft: "25px", fontSize:"17px"}}>Enable secure B2B checkout for your customers</p>
        
        </div>
        </div>
        </div>
        
  </div>);
}
