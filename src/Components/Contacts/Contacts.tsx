import React, { ReactElement } from 'react'
import './Contacts.css'

interface Props {
    
}

export default function Contacts({}: Props): ReactElement {
    return (

         <div className="contacts__wrapper">
           <div className="contacts__heading">
               <span>Do you want to get in touch?</span>
            </div>

            <div className="contacts__desc">
                <span>Here is how you can reach us:</span>
            </div>
            <div className="contacts_container">
                <div className="contact_info">
                    <span>Mobile:  8(777)-001-01-01</span>
                </div>

                <div className="contact_info">
                    <span>E-mail: omks@kbtu.kz</span>
                </div>

            </div>
            


            
            
            
           
         </div> 

    )
}
