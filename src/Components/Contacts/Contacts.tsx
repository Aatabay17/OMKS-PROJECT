import React, { ReactElement } from 'react'
import './Contacts.css'

interface Props {
    
}

export default function Contacts({}: Props): ReactElement {
    return (

         <div className="contacts__wrapper">
           <div className="contacts_title">
                <div className="contacts__heading">
                    <span>Do you want to get in touch?</span>
                </div>

                <div className="contacts__desc">
                    <span>Here is how you can reach us:</span>
                </div>
            </div>  
           
            <div className="contacts_container">
                <div className="contact_info">
                    <i className="fas fa-phone-alt fa-3x"></i>    
                    <h3>Talk to Us</h3><br></br>
                    <span>Call us via mobile phone and we will help you</span><br></br>
                    <a href="#">8(777)-001-01-00</a>
                </div>

                <div className="contact_info">
                    <i className="far fa-envelope fa-3x"></i>
                    <h3>Contact Our Support</h3><br></br>
                    <span>Write us vis email and we will help you</span><br></br>
                    <a href="#">omks@kbtu.kz</a>
                </div>

            </div>
            


            
            
            
           
         </div> 

    )
}
