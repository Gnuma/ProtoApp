import React from "react";

export default function Post(props) {
  return (
    <div>
      <h5>{props.date}</h5>
      <p>{props.content}</p>
    </div>
  );
}
