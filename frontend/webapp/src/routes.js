import React, { Component } from "react";
import { Route } from "react-router-dom";
import PostList from "./containers/PostList";
import PostDetail from "./containers/PostDetail";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={PostList} />
    <Route exact path="/post/:postID/" component={PostDetail} />
  </div>
);

export default BaseRouter;
