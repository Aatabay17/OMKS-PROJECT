import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { RouteComponentProps } from 'react-router';
import { Story } from "../../types";
import { stories } from "../../data";
import "./StoryLanding.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface MatchParams {
    id: string;
}

interface Props extends RouteComponentProps<MatchParams> {
    stories: Story[];
}

const StoryLanding: FunctionComponent<Props> = ({ match } : Props) => {
    const [story, setStory] = useState({})

    useEffect(() => {
        stories.find(item => item.id === Number(match.params.id) && setStory(item))
    }, [match.params.id])

    return (
        <>
        </>
    );
};

export default StoryLanding;
