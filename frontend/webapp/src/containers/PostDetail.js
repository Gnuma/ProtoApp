import React, { Component } from "react";
import Divider from "@material-ui/core/Divider";
import Post from "../components/Post";
import Comment from "../components/Comment";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
import CommentForm from "../components/CommentForm";

export default class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }
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
    axios.get(`http://127.0.0.1:8000/proto/posts/${postID}`).then(res => {
      this.setState({
        post: res.data,
        isLoading: false
      });
      console.log(res.data);
    });
  }

  deletePost(e) {
    e.preventDefault();
    const postID = this.props.match.params.postID;
    axios
      .delete(`http://127.0.0.1:8000/proto/posts/${postID}`, { pk: postID })
      .then(res => {
        console.log("success");
        this.props.history.push("/");
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? (
          <h4 style={{ display: "block", textAlign: "center" }}>Loading...</h4>
        ) : (
          <div>
            <Post {...this.state.post} deletePost={this.deletePost} />
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
