import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BsArrowRightShort} from "react-icons/bs"
import '../aboutUs.css';

function founders (){
    return(
       <body>
            {/* <!-- Founders section --> */}
            <section className="founders ">
                <div className="container ">
                   

                    {/* <!-- Escrow link  --> */}
                    <div className="my-5 text-center escrow-link p-lg-4 ">
                        <div className=" p-4">
                            <h2 className="text-light fs-sm-5">Protect your cross-border trades with Paythru escrow today</h2>
                            <a className="btn btn-lg mt-4 escrow-btn" href="#escrow" type="button" role="button"><strong>Protect my transactions</strong> </a>
                        </div>
                    </div>
                </div>
            </section>
       </body>
    );
}
export default founders;