import React, { ReactElement } from 'react'
import './Contacts.css'

interface Props {
    
}

export default function Contacts({}: Props): ReactElement {
    return (

       



         <div className="contacts__wrapper">
           <div className="contacts__heading">
               <h1>Want to get in touch?</h1>
            </div>

            <div className="contacts__desc">
                <h2>Wanna get in touch? Here is how you can reach us:</h2>
            </div>
            <div className="contacts_container">
                <div className="contact_info">
                    <h2>Modile:  8(789)-454-45-45</h2>
                </div>

                <div className="contact_info">
                    <h2>E-mail: omks@kbtu.kz</h2>
                </div>

            </div>
            


            
            
            
           
         </div> 

    )
}
