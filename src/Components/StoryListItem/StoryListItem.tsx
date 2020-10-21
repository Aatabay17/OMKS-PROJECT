import React, { FunctionComponent, useState, useEffect } from "react";
import { Story } from "../../types";
import "./StoryListItem.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faComments, faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";

interface Props {
  story: Story;
}

const StoryListItem: FunctionComponent<Props> = ({ story }: Props) => {
  const [isLiked, setLike] = useState(false)
  const [amountOfLikes, setAmountOfLikes] = useState(story.amountOfLikes)
  
  useEffect(() => {
    if(isLiked) {
      setAmountOfLikes(prevState => prevState + 1)
    } else {
      setAmountOfLikes(prevState => prevState - 1)
    }
  }, [isLiked])

  return (
    <div className="story_container">
    <div className="story_info">
      <div className="story_row">
        <Link className="story_title" to={`/${story.id}`}>
          {story.storyTitle}
        </Link>
        <div className="story_date">{story.publicationDate}</div>
      </div>
      <div className="story_preview">{story.storyPreview}</div>
      <Link className="story_author" to={`/${story.authorId}`}>
        {story.authorName} {story.authorSurname}
      </Link>
    </div>
    <div className="story_statistics">
        <div className="story_statistics_part">
          {isLiked
            ? <FontAwesomeIcon className="story_like" onClick={() => setLike(false)} icon={faHeart} />
            : <FontAwesomeIcon className="story_like" onClick={() => setLike(true)} icon={faEmptyHeart} />}
        {amountOfLikes}
        </div>
        <div className="story_statistics_part story_comments">
          <FontAwesomeIcon className="story_comment" onClick={() => window.open('/comments')} icon={faComments} />
          {story.comments.length}
        </div>
    </div>
  </div>
    
  )
};

export default StoryListItem;
