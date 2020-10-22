import React, { ReactElement } from 'react'
import './FAQ.css'

interface Props {
    
}

export default function FAQ({}: Props): ReactElement {
    return (
        <div className = 'main-faq-block'>
            <div className="faq">
                <h1>Frequenlty Asked Questions</h1>
            </div>
            
            <div className="question-answer">
                <h2>1.How can I add post?</h2>
                <p>Please, follow the Feed in the head of the site, next type your post in input field, then click the button to push it.</p>
            </div>

            <div className="question-answer">
                <h2>2.Where can I see my posts?</h2>
                <p>Please, go to Profile in the head of the site.</p>
            </div>
            
            <div className="question-answer">
                <h2>3.How to contact you?</h2>
                <p>Please, go to Contacts in the head of the site.</p>
            </div>
        </div>
    )
}
