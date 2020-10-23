import React, { FunctionComponent, useState, useEffect } from "react";
import { Comment as CommentInterface } from "../../types";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Comment.css";

interface Props {
  comment: CommentInterface;
}

const Comment: FunctionComponent<Props> = ({ comment }: Props) => {
  const [isLiked, setLike] = useState<Boolean>(false);
  const [amountOfLikes, setAmountOfLikes] = useState<number>(
    comment.amountOfLikes
  );

  useEffect(() => {
    if (isLiked) {
      setAmountOfLikes((prevState) => prevState && prevState + 1);
    } else {
      setAmountOfLikes((prevState) => prevState && prevState - 1);
    }
  }, [isLiked]);

  return (
    <div className="comment_container">
      <div className="comment_info">
        <div className="comment_author">
          {comment.authorName} {comment.authorSurname}
        </div>
        <div className="comment_date">{comment.publicationDate}</div>
      </div>
      <div className="comment_text">{comment.text}</div>
      <div className="comment_likes">
        {isLiked ? (
          <FontAwesomeIcon
            className="story_like"
            onClick={() => setLike(false)}
            icon={faHeart}
          />
        ) : (
          <FontAwesomeIcon
            className="story_like"
            onClick={() => setLike(true)}
            icon={faEmptyHeart}
          />
        )}
        {amountOfLikes}
      </div>
    </div>
  );
};

export default Comment;
