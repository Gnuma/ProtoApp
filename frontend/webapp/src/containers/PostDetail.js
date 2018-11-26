import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Post from "../components/Post";
import Form from "../components/Form";
import Comment from "../components/Comment";

export default class PostDetail extends Component {
  state = {
    post: {
      id: 1,
      title: "Post 1",
      date: "10/12/2014",
      content: "lorem ipsum dorem colem rolem melom stom inventandom",
      likes: 25,
      comments: 4
    },
    comments: [
      {
        id: 1,
        date: "14/16/1015",
        content:
          "Commento Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor accusamus animi dolore veniam pariatur fuga odio deserunt quidem adipisci eum nisi aliquam voluptatem iste, harum eos maxime repellat hic sapiente."
      },
      {
        id: 2,
        date: "14/16/1015",
        content:
          "Commento Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor accusamus animi dolore veniam pariatur fuga odio deserunt quidem adipisci eum nisi aliquam voluptatem iste, harum eos maxime repellat hic sapiente."
      },
      {
        id: 3,
        date: "14/16/1015",
        content:
          "Commento Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor accusamus animi dolore veniam pariatur fuga odio deserunt quidem adipisci eum nisi aliquam voluptatem iste, harum eos maxime repellat hic sapiente."
      },
      {
        id: 4,
        date: "14/16/1015",
        content:
          "Commento Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor accusamus animi dolore veniam pariatur fuga odio deserunt quidem adipisci eum nisi aliquam voluptatem iste, harum eos maxime repellat hic sapiente."
      }
    ]
  };

  render() {
    return (
      <div>
        <Post {...this.state.post} />
        {this.state.comments.map(comment => (
          <Comment key={comment.id} {...comment} />
        ))}
      </div>
    );
  }
}
