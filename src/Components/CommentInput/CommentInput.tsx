import React, { FunctionComponent, useState } from "react";
import { User } from "../../types";
import "./CommentInput.css";

interface Props {
  addComment: Function;
}

const CommentInput: FunctionComponent<Props> = ({ addComment }: Props) => {
  const [text, setText] = useState<string>("");

  return (
    <div className="comment_input_container">
      <div className="comment_input_title">Ваш комментарий:</div>
      <textarea
        className="comment_input"
        onChange={(e) => setText(e.target.value)}
        value={text}
        placeholder="Введите Ваш комментарий"
      />
      <button className="button" onClick={() => addComment(text)}>
        Добавить
      </button>
    </div>
  );
};

export default CommentInput;
