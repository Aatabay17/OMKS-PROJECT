import React, { ReactElement } from 'react'
import './FAQ.css'

interface Props {
    
}

export default function FAQ({}: Props): ReactElement {
    return (
        <div className = 'main-faq-block'>
            <div className="faq">
                <h1>Help and Support</h1>
                <h2>Frequenlty Asked Questions</h2>
            </div>
            
            <div className="question-answer">
                <p>1.How can I add post?</p>
                <p>Please, follow the Feed in the head of the site, next type your post in input field, then click the button to push it.</p>
            </div>

            <div className="question-answer">
                <p>2.Where can I see my posts?</p>
                <p>Please, go to Profile in the head of the site.</p>
            </div>
            
            <div className="question-answer">
                <p>3.How to contact you?</p>
                <p>Please, go to Contacts in the head of the site.</p>
            </div>
        </div>
    )
}
