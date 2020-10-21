import React, { ReactElement } from 'react'
import { Story, User } from '../../App'
import './Profile.css'
import avatar from '../../Images/avatar.jpg'

interface Props {
    activeUser: User,
    initialStories: Story[]
};

export default function Profile({activeUser, initialStories}: Props): ReactElement {
    const personalStories = (story: Story) => {
        if(story.idcheck === activeUser.id){
            return true;
        }
    }

    const res = initialStories.filter(story => personalStories(story));
    let cnt = 0;
    let cnt1 = 0;
    let cntlikes = res.map((story) => cnt + story.numberoflikes);
    let cntcomments = res.map((story) => cnt1 + story.numberofcomments);
    // res.forEach(cntlikes);

    // function cntlikes(story : Story) {
    //   cnt += story.numberoflikes;
    //   return cnt;
    // }
    // res.forEach(cntcomments);

    // function cntcomments(story : Story) {
    //   cnt1 += story.numberofcomments;
    //   return cnt1;
    // }
    return (
        <div className = 'main-profile-block'>
            <div className = 'left-right-profile-blocks'>
                <div className = 'left-profile-block'>
                    <span className = 'profile-title'>About me</span>
                    <div className = 'profile-info'>
                        <div className = 'avatar-collumn'>
                            <img src = {avatar}></img>
                        </div>
                        <div className = 'left-collumn'>
                            <span className = 'profile-property'>Name: </span>
                            <span className = 'profile-property'>Surname: </span>
                            <span className = 'profile-property'>Email: </span> 
                            <span className = 'profile-property'>Faculty: </span>
                            <span className = 'profile-property'>Course: </span>
                        </div>
                        <div className = 'right-collumn'>
                            <span className = 'profile-property profile-answer'>{activeUser.name}</span> 
                            <span className = 'profile-property profile-answer'>{activeUser.surname} </span> 
                            <span className = 'profile-property profile-answer'>{activeUser.email}</span> 
                            <span className = 'profile-property profile-answer'>{activeUser.faculty}</span> 
                            <span className = 'profile-property profile-answer'>{activeUser.course}</span> 
                        </div>
                    </div>
                </div>
                <div className = 'right-profile-block'>
                    <span className = 'profile-title'>Statistics</span>
                    <div className = 'profile-info-rows'>
                        <div className = 'first-row'>
                            <span className = 'profile-property'>Likes: </span>
                            <span className = 'profile-property'>{cntlikes}</span>
                        </div>
                        <div className = 'second-row'>
                            <span className = 'profile-property'>Comments: </span>
                            <span className = 'profile-property'>{cntcomments}</span>
                        </div>
                        <div className = 'third-row'>
                            <span className = 'profile-property'>Stories: </span> 
                            <span className = 'profile-property'> {res.length} </span>
                        </div> 
                    </div>
                </div>
            </div>
            <div className = "down-block">
                <span className = 'profile-title'>My stories</span>
                <div className = 'my-stories-block'>
                    <div className = 'list-of-stories'> 
                    {res.map((story, index) => (
                            <li className="list__item" key={index}>
                                { story.authorname }
                                { story.authorsurname }
                                { story.story }
                                { story.numberoflikes }
                                { story.numberofcomments }
                            </li>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
