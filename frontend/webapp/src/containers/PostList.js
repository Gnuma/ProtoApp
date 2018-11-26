import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import Post from "../components/Post";
import Form from "../components/Form";

const styles = theme => ({
  postList: {
    width: "80%"
  }
});

export default class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        title: "Post 1",
        date: "10/12/2014",
        content: "lorem ipsum dorem colem rolem melom stom inventandom",
        likes: 25,
        comments: 4
      },
      {
        id: 2,
        title: "Post 2",
        date: "10/12/2014",
        content: "lorem ipsum dorem colem rolem melom stom inventandom",
        likes: 25,
        comments: 4
      },
      {
        id: 3,
        title: "Post 3",
        date: "10/12/2014",
        content: "lorem ipsum dorem colem rolem melom stom inventandom",
        likes: 25,
        comments: 4
      }
    ]
  };

  render() {
    return (
      <div>
        <Form />
        <List style={{ maxWidth: "800px", margin: "auto" }}>
          {this.state.posts.map(post => (
            <div key={post.id}>
              <Post {...post} listed />
              <Divider />
            </div>
          ))}
        </List>
      </div>
    );
  }
}
