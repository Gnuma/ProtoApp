import React from "react";
import LikeIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import { NavLink } from "react-router-dom";

export default function Post(props) {
  return (
    <div>
      {props.listed ? (
        <NavLink to={"/post/" + props.id + "/"}>
          <div>
            <h3>{props.title}</h3>
            <h5>{props.date}</h5>
          </div>
          <p>{props.content}</p>
          <div>
            <div>
              {props.likes} <LikeIcon />
            </div>
            <div>
              {props.comments} <CommentIcon />
            </div>
          </div>
        </NavLink>
      ) : (
        <div>
          <div>
            <h3>{props.title}</h3>
            <h5>{props.date}</h5>
          </div>
          <p>{props.content}</p>
          <div>
            <div>
              {props.likes} <LikeIcon />
            </div>
            <div>
              {props.comments} <CommentIcon />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
