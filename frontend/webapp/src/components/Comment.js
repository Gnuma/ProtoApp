import React from "react";
import LikeIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";

export default function Post(props) {
  return (
    <div>
      <h5>{props.date}</h5>
      <p>{props.content}</p>
    </div>
  );
}
