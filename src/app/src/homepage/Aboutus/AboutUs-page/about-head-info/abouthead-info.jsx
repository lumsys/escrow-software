import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-icons';
import "../aboutUs.css";
import image from '../img/about-head.png';

function aboutHeadinfo() {
    return(
        <body>
            {/* About-head-info */}
            <section className="section-2 ">
                <div className="container">    
                    <div className="about-head-info">
                        <img src={image} alt="headerImg" className="image-fluid top-img d-md-50"/>
                        <div>
                            <h3 style={{textAlign:"center", marginTop: "20px"}}>Tailor-made solutions</h3>
                            <p style={{textAlign:"center", marginBottom:"0"}}>PayThru™ offers various payment solutions</p>
                            <p style={{textAlign:"center", marginBottom:"0"}}>for individuals, small and large scale</p>
                            <p style={{textAlign:"center", marginBottom:"0"}}>businesses for smart, efficient and reliable</p>
                            <p style={{textAlign:"center", marginBottom:"0"}}>fund disbursement and collection.</p>
                        </div>
                        <div className="row" style={{marginTop:"20px"}}>
                            <div className="col-lg-4">
                                
                                <h4 style={{textAlign:"center", marginTop:"20px"}}>PayThru Credit</h4>
                                <p style={{textAlign:"center", marginBottom:"0"}}>Whatever your payment need are,</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>Paythru credit offers you robust and</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>secure bulk solutions for salaries, pension</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>contributions etc.</p>
                            </div>
                            <div className="col-lg-4">
                                
                                <h4 style={{textAlign:"center", marginTop:"20px"}}>PayThru Debit</h4>
                                <p style={{textAlign:"center", marginBottom:"0"}}>Never chase a customer for payment</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>anymore with PayThru Debit, a robust</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>Direct Debit Management system for all</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>your business need.</p>
                            </div>
                            <div className="col-lg-4">
                                
                                <h4 style={{textAlign:"center", marginTop:"20px"}}> BVN Validation</h4>
                                <p style={{textAlign:"center", marginBottom:"0"}}>Verify your customer information</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>conveniently using our BVN validation</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>secure bulk solutions for salaries, pension</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>contributions etc.</p>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"20px"}}>
                        <div className="col-lg-4">
                                
                                <h4 style={{textAlign:"center", marginTop:"20px"}}>PayThru CardFree</h4>
                                <p style={{textAlign:"center", marginBottom:"0"}}>Let your customers pay you conveniently</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>with just their account number. NO debit</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>card required.</p>
                            </div>
                            <div className="col-lg-4">
                                
                                <h4 style={{textAlign:"center", marginTop:"20px"}}>PayThru NQR</h4>
                                <p style={{textAlign:"center", marginBottom:"0"}}>We empower businesses to get started</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>with the new NQR technology by NIBSS for</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>contactless payment</p>
                            </div>
                            <div className="col-lg-4">
                                
                                <h4 style={{textAlign:"center", marginTop:"20px"}}>Single View</h4>
                                <p style={{textAlign:"center", marginBottom:"0"}}>View all your accounts balance from all</p>
                                <p style={{textAlign:"center", marginBottom:"0"}}>your banks in real time on a single page.</p>
                            </div>
                        </div>
                        <div style={{marginBottom:"20px"}}>
                            <h3 style={{textAlign:"center", marginTop: "20px"}}>Tailor-made solutions</h3>
                            <p style={{textAlign:"center", marginBottom:"0"}}>PayThru™ offers various payment solutions</p>
                            <p style={{textAlign:"center", marginBottom:"0"}}>for individuals, small and large scale</p>
                            <p style={{textAlign:"center", marginBottom:"0"}}>businesses for smart, efficient and reliable</p>
                            <p style={{textAlign:"center"}}>fund disbursement and collection.</p>
                        </div>

                    </div>
                </div>
            </section>

        </body>        
    );
}

export default aboutHeadinfo;