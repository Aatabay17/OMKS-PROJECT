import React, { ReactElement } from 'react'
import { useHistory} from 'react-router-dom'
import './About.css'
interface Props {
    
}

export default function About({}: Props): ReactElement {
    
    const history = useHistory()

    return (
        <div className="about">
            
            <h1>About Us</h1>
            <div className="about_blocks">
                <div className="blocks">
                    <h2>For What?</h2>
                    <p className="about_p">
                        Do you have student stories, discussions, lost things? Or maybe invitations to events?<br></br>
                        You can find this in OMKS!

                    </p>
                    
                </div>
                <div className="blocks">
                    <h2>Who We Are?</h2>
                    <p className="about_p">
                        One Million KBTU Stories is a service that provides students of our university to share their stories, thoughts and suggestions with friends.
                    </p>
                </div>
                <div className="blocks">
                    <h2>Our Mission</h2>
                    <p className="about_p">
                    Our goal is to give students opportunity to has their own social media where they can read other posts, feedback them and add their own stories.
                    </p>
                </div>
            </div>
            
            
           
            
           
        </div>
    )
}
