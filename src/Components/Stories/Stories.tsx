import React, { FunctionComponent, useRef } from "react";
import { Story } from "../../types";
import { stories } from "../../data";
import "./Stories.css";
import StoryListItem from "../StoryListItem/StoryListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
interface Props {
  stories: Story[];
}

const Stories: FunctionComponent<Props> = () => {
  
    const listAnchor = useRef<HTMLDivElement>(document.createElement("div"))

    const scrollToBottom = () => {
        listAnchor.current.scrollIntoView({ behavior: "smooth", block: 'nearest'});
    }

    return (
    <div className="stories_container">
      <div className="stories_header">
        <div className="stories_title">Истории</div>
            <div onClick={scrollToBottom}className="stories_anchor_link">
          В конец <FontAwesomeIcon icon={faArrowDown} />
        </div>
      </div>
      <div className="stories_list">
        {stories.map((story) => (
          <StoryListItem key={story.id} story={story} />
        ))}
        <div ref={listAnchor} className="stories_anchor" />
      </div>
    </div>
  );
};

export default Stories;
