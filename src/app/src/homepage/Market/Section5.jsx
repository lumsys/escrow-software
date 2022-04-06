import React from 'react';
import {MdOutlineVerifiedUser} from 'react-icons/md';
import "./section2.css";
import {Table} from "react-bootstrap";
import pdfit from "./market.pdf";
import sequi from './images/sequ.png';
import rtp from "./images/rtp.svg";
import jan from "./images/jan.svg";
import saison from "./images/saison.png";

export default function Section5() {
  return (<div>
    <div className='binded'>
    {/* <div className='veried'>
        <p><MdOutlineVerifiedUser/></p>
        </div>
        <h2 className='veried1'>Trusted platform for B2B transactions</h2>
        <p className='veried2'>Your money is securely handled by an institution licensed and regulated by the Monetary Authority of Singapore (MAS), Rapyd. As per MAS requirements, all customer funds are safeguarded and held with an authorised bank in Singapore.</p>
        <p className='veried2'>Tazapay is licensed in Canada (through its wholly owned subsidiary Tazapay Canada Corp).FINTRAC Money Services Business (MSB) license number M21439799.</p>
        <p style={{textAlign:"center"}}>Backed by leading investors</p>
        <div style={{display: "flex",flexWrap:"wrap", justifyContent:"space-between", paddingBottom:"40px"}}>
        <img src={sequi} className="sec5logo1" style={{width:"145px", height:"30px", marginLeft:"30px"}}/>
        <img src={rtp} className="sec5logo" style={{width:"203px", height:"auto"}}/>
        <img src={jan} className="sec5logo" style={{width:"206px", height:"auto"}}/>        
        <img src={saison} className="sec5logo2" style={{width:"76px", height:"30px", marginRight:"30px"}}/>
        </div> */}
        <Table striped bordered hover>
  <thead>
    <tr>
      <th colSpan={4}><strong>HOW TO PICK THE RIGHT OPTION? </strong></th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td colSpan={4}>Here is a side-by-side comparison so you can decide what your business needs </td>
      </tr>
      <tr>
        <td></td>
        <td><strong>Referral Link</strong></td>
        <td><strong>Hosted Escrow</strong></td>
        <td><strong>Native Escrow</strong></td>
      </tr>
      <tr>
        <td><strong>Overall Experience </strong></td>
        <td>Experience Redirect to PayThru platform. </td>
        <td>Hosted pages from PayThru. </td>
        <td>Hosted pages from PayThru.</td>
      </tr>
      <tr>
        <td><strong>User accounts on PayThru </strong></td>
        <td>Users create PayThru accounts </td>
        <td>Auto account creation for users </td>
        <td>No PayThru accounts for users</td>
      </tr>
      <tr>
        <td><strong>Integration Effort  </strong></td>
        <td>None</td>
        <td>Low</td>
        <td> High </td>
      </tr>
      <tr>
      <td rowspan={2}>
        <h5>Buyer/ Seller Experience</h5>
        <ul>
          <li>status</li>
          <li>Bank Details</li>
          <li>KYB/KYC</li>
          <li>Document Upload</li>
          <li>Payment Disputes</li>
        </ul>
        </td>
        <td rowspan={2}>on Paythru</td>
        <td>On the platform, with hosted pages from PayThru. </td>
        <td>On the platform with native experience. </td>
      </tr>
      <tr>
        <td>Platform does not need to build UX  </td>
        <td>Platform needs to build UX</td>
      </tr>
      <tr>
        <td><strong>Escrow Agreement Creation </strong></td>
        <td>On PayThru: Buyer/seller create escrow agreement with all trade details</td>
        <td>On the platform: Details captured via API. Auto creation of escrow agreement. </td>
        <td>On the platform: Details captured via API. Auto creation of escrow agreement. </td>
      </tr>
      <tr>
        <td><strong>Payment Release Conditions </strong></td>
        <td>On shipment. Documents verified by PayThru </td>
        <td>Release instruction comes from the Platform* </td>
        <td>Release instruction comes from the Platform </td>
      </tr>
      <tr>
        <td><strong>Liability & Dispute </strong></td>
        <td>PayThru</td>
        <td> Platform*</td>
        <td> Platform </td>
      </tr>
      <tr>
        <td><strong>Payment Collection From Buyer </strong></td>
        <td>PayThru</td>
        <td> PayThru</td>
        <td> PayThru</td>
      </tr>
      <tr>
        <td><strong>Payment Collection From Buyer</strong></td>
        <td>PayThru</td>
        <td> PayThru</td>
        <td> PayThru</td>
      </tr>
      <tr>
        <td rowspan={2}><strong>Notifications To Buyer/Seller </strong></td>
        <td>PayThru </td>
        <td>Buyer - PayThru</td>
        <td>Platform</td>
      </tr>
      <tr>
        <td></td>
        <td>Seller - Platform</td>
        <td></td>
      </tr>
      <tr>
        <td colspan={4}>* Configurable; PayThru can verify documents and take on dispute liability if required </td>
      </tr>
  </tbody>
  </Table>
    </div>
  </div>);
}
