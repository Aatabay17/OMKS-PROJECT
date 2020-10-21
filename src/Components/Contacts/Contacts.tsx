import React, { ReactElement } from 'react'

interface Props {
    
}

export default function Contacts({}: Props): ReactElement {
    return (

       



         <div className="contacts__wrapper">
           <div className="contacts__heading">
               <h1>Want to get in touch?</h1>
         </div>

            <div className="contacts__desc">
                <h1>Wanna get in touch? Here is how you can reach us:</h1>
            </div>
            <div className="contacts__heading">
                <h1>Modile:  8(789)-454-45-45</h1>
             </div>

            <div className="contacts__heading">
                <h1>E-mail: omks@kbtu.kz</h1>
            </div>
            
            
           
         </div> 

    )
}
