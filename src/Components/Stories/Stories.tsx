import React, { ReactElement } from 'react'
import { Story } from '../../App'
import './Stories.css'

interface Props {
    stories: Story[],
}

export default function Feed({stories}: Props) : ReactElement {
    return (
        <div className="feed_container">
            <div className="feed_textarea_container">
                <input />
            </div>
            <div className="feed_stories">
                {stories.map(story => {
                    return (
                        <div className="feed_stories_item">
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
