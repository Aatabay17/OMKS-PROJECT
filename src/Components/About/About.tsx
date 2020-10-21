import React, { ReactElement } from 'react'
import { useHistory} from 'react-router-dom'

interface Props {
    
}

export default function About({}: Props): ReactElement {
    
    const history = useHistory()

    return (
        <div className="about">
            <p className="about_p">
                Do you have student stories, discussions, lost things? Or maybe invitations to events?

            </p>
            <p className="about_p">
                You can find this in OMKS!
            </p>
            <p className="about_p">
                One Million KBTU Stories is a service that provides students of our university to share their stories, thoughts and suggestions with friends.
            </p>
            <p className="about_p">
                Our goal is to give students opportunity to has their own social media where they can read other posts, feedback them and add their own stories.
            </p>
            {/* <button className="btn" onClick={() => history.push('/welcome')}>
                На главную
            </button> */}
        </div>
    )
}
