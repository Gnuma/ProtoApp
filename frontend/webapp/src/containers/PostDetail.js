import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Post from "../components/Post";
import Comment from "../components/Comment";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import CommentForm from "../components/CommentForm";

export default class PostDetail extends Component {
  state = {
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
    ],
    isLoading: true
  };

  componentDidMount() {
    const postID = this.props.match.params.postID;
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${postID}`)
      .then(res => {
        this.setState({
          post: res.data,
          isLoading: false
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h4 style={{ display: "block", textAlign: "center" }}>Loading...</h4>
        ) : (
          <div>
            <Post {...this.state.post} />
            <CommentForm />
            {this.state.comments.map(comment => (
              <div key={comment.id}>
                <Divider />
                <Comment {...comment} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
