import React from 'react';
import online from "../images/online.jpg";
import checkout from "../images/checkout.jpg";
import features from "../images/Features.jpg";
import signs from "../images/Signs.jpg";
import what from "../images/What.jpg";
import why from "../images/why.jpg";
import './articles.css'
import { Col, Row } from 'react-bootstrap';


function Articles(){
    const date = new Date();
    const year = date.getFullYear();
    return (
    <div className='compArticle'>
        <h3>Articles</h3>
        <hr />
        <div className=' containerFluid1 '>
            <Row className='row1'>
            <Col sm md className="col1 ">
            
                    <a>
                        <img className = 'articleImg' src={online} alt='alld'></img>
                        <div className='articleText'>
                            <p className='articleColor'> B2B Payment</p>
                            <h2 className='articleHeadingColor '><strong>Online B2B Payment Trends in Singapore 2022</strong></h2>
                            <p className='articleColor textSize'>Singapore's a digitally literate nation eith an 88.9% imternet penetration 
                            and a 97,9% financial inclusion rate amongst the 5,87 million people that...</p>                
                        </div>
                    </a>
                    <div className='yearMinutes'>
                    <span className='year'>Jan 28, {year}</span>
                    <span className='minutes'>10 min of read</span>
                    </div>
                    
                </Col>
                <Col sm md className="col1">
                
                    <a>
                        <img className = 'articleImg' src={features} alt='alld'></img>
                        <div className='articleText'>
                            <p className='articleColor'> B2B Payment</p>
                            <h2 className='articleHeadingColor '><strong>Features to Look For from Your Payment Provider as a B2B...</strong></h2>
                            <p className='articleColor textSize'>Having a predictable and secure cash flow is crucial for any online B2B business looking to...</p>                
                        </div>
                    </a>
                    <div className='yearMinutes'>
                    <span className='year'>Jan 20, {year}</span>
                    <span className='minutes'>6 min of read</span>
                    </div>
                    
                </Col>
                <Col sm md className="col1">
                
                    <a>
                        <img className = 'articleImg' src={signs} alt='alld'></img>
                        <div className='articleText'>
                            <p className='articleColor'> B2B Payment</p>
                            <h2 className='articleHeadingColor '><strong>Signs to Look for to Acoid Online Payment Platform Fraud</strong></h2>
                            <p className='articleColor textSize'>Online fraud is about as old as the internet itself. it evovles and adapt at roughly the same pace as...</p>                
                        </div>
                    </a>
                    <div className='yearMinutes'>
                    <span className='year'>Jan 13, {year}</span>
                    <span className='minutes'>7 min of read</span>
                    </div>
                    
                </Col>
                </Row>

                <Row className='row2'>
                <Col sm md className='col1'>
                    <a>
                        <img className = 'articleImg' src={what} alt='alld'></img>
                        <div className='articleText'>
                            <p className='articleColor'> B2B Payment</p>
                            <h2 className='articleHeadingColor '><strong>What Should You look for in a B2B Payment Gateway's API?</strong></h2>
                            <p className='articleColor textSize'>With more businesses taking to the online space to transact, its's more important than ever to...</p>                
                        </div>
                    </a>
                    <div className='yearMinutes'>
                    <span className='year'>Jan 6, {year}</span>
                    <span className='minutes'>6 min of read</span>
                    </div>
                    
                    
                </Col>
                
                <Col sm md className='col1'>
                    <a>
                        <img className = 'articleImg' src={why} alt='alld'></img>
                        <div className='articleText'>
                            <p className='articleColor'> Export & Import</p>
                            <h2 className='articleHeadingColor '><strong>Why Do B2B Businesses Need Escrow Services</strong></h2>
                            <p className='articleColor textSize'>The global B2B e-commerce market was valued at US$14.9 trillion...</p>                
                        </div>
                    </a>
                    <div className='yearMinutes'>
                    <span className='year'>Dec 15, {year}</span>
                    <span className='minutes'>3 min of read</span>
                    </div>
                    
                </Col>
                <Col sm md className='col1'>
                    <a>
                        <img className = 'articleImg' src={checkout} alt='alld'></img>
                        <div className='articleText'>
                            <p className='articleColor'> B2B Payment</p>
                            <h2 className='articleHeadingColor '><strong>B2B Checkout Best Practices to Increase Conversion</strong></h2>
                            <p className='articleColor textSize'>The differences between consumer (B2C) and business-to-business (B3B) eCommerce...</p>                
                        </div>
                    </a>
                    <div className='yearMinutes'>
                    <span className='year'>Dec 15, {year}</span>
                    <span className='minutes'>4 min of read</span>
                    </div>
                    
                </Col>
                   </Row>
            </div>
       <div className='loadM'> <span className='loadMore'> Load more articles</span></div>
       {/* <h3>Categories</h3>
        <hr />
        <div className='categories1 row'>
            <div className='listCategories col-lg-4'>B2B Payment</div>
            <div className='listCategories1 col-lg-4'>Custom & Incoterms</div>
            <div className='listCategories2 col-lg-4'>Export & Import</div>
        </div> */}
    </div>)}
 export default Articles;