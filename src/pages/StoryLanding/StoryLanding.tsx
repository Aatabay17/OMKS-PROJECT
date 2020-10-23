import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { RouteComponentProps } from "react-router";
import { Comment as CommentType, Story, User } from "../../types";
import { stories } from "../../data";
import "./StoryLanding.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import {
  faComments,
  faHeart as faEmptyHeart,
} from "@fortawesome/free-regular-svg-icons";
import Comment from "../../components/Comment/Comment";
import CommentInput from "../../components/CommentInput/CommentInput";
import { UserInfoConsumer } from "../../components/UserProvider/UserProvider";
import { addSyntheticLeadingComment } from "typescript";
interface MatchParams {
  id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
  stories: Story[];
  location: any;
}

const StoryLanding: FunctionComponent<Props> = ({ match, location }: Props) => {
  const [story, setStory] = useState<Story | undefined>(undefined);
  const [isLiked, setLike] = useState<Boolean>(false);
  const [amountOfLikes, setAmountOfLikes] = useState<number | undefined>(0);

  const commentAnchor = useRef<HTMLDivElement>(document.createElement("div"));

  useEffect(() => {
    setStory(stories.find((item) => item.id === Number(match.params.id)));
    setAmountOfLikes(story?.amountOfLikes);

    if (location.search.indexOf("comments") > -1)
      commentAnchor.current.scrollIntoView({ behavior: "smooth" });
  }, [location.pathname, location.search, match.params.id, story]);

  useEffect(() => {
    if (isLiked) {
      setAmountOfLikes((prevState) => prevState && prevState + 1);
    } else {
      setAmountOfLikes((prevState) => prevState && prevState - 1);
    }
  }, [isLiked]);

  const addComment = (text: string) => {};

  return (
    <div className="story_landing_container">
      <div className="story_header">
        <div className="story_header_title">{story?.storyTitle}</div>
        <div className="story_header_author">
          {story?.authorName} {story?.authorSurname}
        </div>
      </div>
      <div className="story_body">
        История
        <div className="story_body_text">{story?.story}</div>
        <div className="story_body_additions">
          <div className="story_body_buttons_likes">
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
          <div className="story_body_info">
            <div className="story_body_additions_author">
              {story?.authorName} {story?.authorSurname}
            </div>
            <div className="story_body_additions_date">
              {story?.publicationDate}
            </div>
          </div>
        </div>
      </div>
      <div ref={commentAnchor} className="story_landing_comments">
        <div className="story_comments_title">
          Комментарии ({story?.comments.length})
        </div>
        <div className="story_comments_list">
          {story?.comments.map((comment) => (
            <Comment comment={comment} />
          ))}
        </div>
        <UserInfoConsumer>
          {({ user }) => {
            return (
              <div className="story_comments_input">
                <CommentInput addComment={addComment} />
              </div>
            );
          }}
        </UserInfoConsumer>
      </div>
    </div>
  );
};

export default StoryLanding;
