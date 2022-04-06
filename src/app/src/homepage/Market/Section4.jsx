import React from 'react';
import arrowside from "./images/arrowside.svg";
import Paythru from "../../paythru.png";
import "./section2.css";

export default function Section4() {
  return <div className="packed">
    <h1 style={{color: 'white', textAlign: "center", paddingTop:"40px", width:"100%"}}>How Escrow works</h1>
    <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}>
    <div className="joined">
        <img src={Paythru} className='arrowside' alt="arrowside" />
        <h5 className="sendesc">Send Escrow Request</h5>
        <p style={{paddingBottom:"40px"}}>Provide transaction details and send an escrow payment request to your buyer or vendor</p>
    </div> 
    <div className="joined">
        <img src={Paythru} className='arrowside' alt="arrowside" />
        <h5 className="sendesc">Accept Request</h5>
        <p style={{paddingBottom:"40px"}}>Counterparty to create a Paythru account and accept escrow payment request</p>
    </div> 
    <div className="joined">
        <img src={Paythru} className='arrowside' alt="arrowside" />
        <h5 className="sendesc">Transfer Payment to Paythru</h5>
        <p style={{paddingBottom:"40px"}}>Buyer to transfer the invoice amount, Paythru will safeguard the funds until the order is fulfilled</p>
    </div>
    </div>
    <div style={{display:"flex", justifyContent:"center", flexWrap:"wrap"}}> 
    <div className="joined1">
        <img src={Paythru} className='arrowside' alt="arrowside" />
        <h5 className="sendesc">Provide Document Proof</h5>
        <p style={{paddingBottom:"40px"}}>Vendor to provide proof of shipment for goods or proof of delivery for services</p>
    </div> 
    <div className="joined1">
        <img src={Paythru} className='arrowside' alt="arrowside" />
        <h5 className="sendesc">Accept Request</h5>
        <p style={{paddingBottom:"40px"}}>Counterparty to create a Paythru account and accept escrow payment request</p>
    </div> 
    <div className="joined1">
        <img src={Paythru} className='arrowside' alt="arrowside" />
        <h5 className="sendesc">Payment release</h5>
        <p style={{paddingBottom:"40px"}}>Once documents are verified, payment will be released and vendor will receive funds within 48 hours.</p>
    </div> 
    </div> 
  </div>;
}
