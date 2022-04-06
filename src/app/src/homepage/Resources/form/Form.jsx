import React from 'react'
import './form.css'

function Form(){
    return (<div className='formRight'>
                    <h2 className='headingColor'>Sign up to our newsletter!</h2>
                    <p>We'll send you regular content and crossborder payment, every 2 weeks.</p>
                <form action='subscribe'>                    
                    <p className='textLabel'><label for='email' className='formText'>Email</label></p>
                    <input type='email' className="forminput" id='email' size='50' required></input>
                <div className='name'>
                    <div class='fmz6'>
                        
                            <p className='textLabel'><label for='lName' className='formText'>Last Name</label></p>
                            <input type='text' className="forminput1" id='lName' size='15'></input>
                                      
                    </div>
                    <div class='fmz6'>
                        
                            <p className='textLabel'><label for='fName' className='formText'>First Name</label></p>
                            <input type='text' className="forminput1" id='fName' size='15'></input>
                       
                    </div>
                </div>
                
                <p>
                <label>
                    <input type='checkbox' name='agreement'></input><span className='formText pText'>I agree to receive other communications from Tazapay</span>

                </label>
                </p>
                <p className='formText'>By clicking submit below, you consent to allow Tazapay to store and process the personal information submitted
                above to the provide you the content requested.</p>

                <button type='submit' class='formButton'>Subscribe</button>
                
                    
                </form>
                

    </div>)
}
export default Form;