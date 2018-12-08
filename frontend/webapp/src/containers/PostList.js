import React, { Component } from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Post from "../components/Post";
import Form from "../components/Form";
import axios from "axios";
import CircularProgress from "@material-ui/core/CircularProgress";
export default class PostList extends Component {
  constructor(props) {
    super(props);
    this.createPost = this.createPost.bind(this);
  }

  state = {
    isLoading: true,
    posts: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then(res => {
      this.setState({
        posts: res.data.reverse(),
        isLoading: false
      });
    });
  }

  createPost(e) {
    e.preventDefault();
    const body = e.target.body.value;
    const title = e.target.title.value;

    this.setState({
      posts: [{ body, title, id: 101 }, ...this.state.posts]
    });
  }

  render() {
    return (
      <div>
        <Form handleSubmit={this.createPost} />
        {this.state.isLoading ? (
          <h4 style={{ display: "block", textAlign: "center" }}>Loading...</h4>
        ) : (
          <div style={{ maxWidth: "800px", margin: "auto" }}>
            {this.state.posts.map(post => (
              <div key={post.id}>
                <Divider />
                <Post {...post} listed />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
