import React, { ReactElement } from 'react'
import { Story } from '../../App'
import './Feed.css'

interface Props {
    initialStories: Story[],
}

export default function Feed({initialStories}: Props): ReactElement {
    return (
        <div className = 'feed-block'>
            <div className = 'story-input-btn'>
                <input className = 'story-input'/> <button className = 'btn'>Post</button>
            </div>
            <div className = 'list-of-stories'> 
                {initialStories.map((story, index) => (
                        <li className="list__item" key={index}>
                            { story.authorname }
                            { story.authorsurname }
                            { story.story }
                            { story.numberoflikes }<button className = 'btn'>&#x1F9E1;</button>
                            { story.numberofcomments }<button className = 'btn'>Comment</button>
                        </li>
                ))}
            </div>
        </div>
    )
}
