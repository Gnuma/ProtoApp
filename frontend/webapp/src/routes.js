import React from "react";
import { Route } from "react-router-dom";
import PostList from "./containers/PostList";
import PostDetail from "./containers/PostDetail";
import Login from "./containers/Login";
import Signup from "./containers/Signup";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={PostList} />
    <Route exact path="/post/:postID/" component={PostDetail} />
    <Route exact path="/login/" component={Login} />
    <Route exact path="/signup/" component={Signup} />
  </div>
);

export default BaseRouter;
