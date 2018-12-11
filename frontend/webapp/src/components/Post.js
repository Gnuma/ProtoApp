import React from "react";
import LikeIcon from "@material-ui/icons/ThumbUp";
import CommentIcon from "@material-ui/icons/Comment";
import { NavLink } from "react-router-dom";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Badge from "@material-ui/core/Badge";
import Button from "@material-ui/core/Button";
import dateFormatter from "../utils/dateFormatter";

export default function Post(props) {
  let component = (
    <Grid
      justify="space-between"
      container
      spacing={8}
      direction="column"
      alignItems="center"
    >
      <Grid item>
        <Typography gutterBottom variant="h5">
          {props.user}
        </Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom variant="subtitle2">
          {dateFormatter(props.pub_date)}
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography gutterBottom variant="body1">
          {props.content}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        container
        direction="row"
        alignItems="center"
        justify="center"
        spacing={24}
      >
        <Grid item>
          <Badge color="secondary" badgeContent={props.nlikes}>
            <LikeIcon />
          </Badge>
        </Grid>
        <Grid item>
          <Badge color="secondary" badgeContent={props.ncomments}>
            <CommentIcon />
          </Badge>
        </Grid>
      </Grid>
      {!props.listed ? (
        <form onSubmit={props.deletePost}>
          <Button variant="contained" color="secondary" type="submit">
            Delete Post
          </Button>
        </form>
      ) : (
        ""
      )}
    </Grid>
  );

  if (props.listed) {
    component = (
      <NavLink
        to={"/post/" + props.id + "/"}
        style={{ textDecoration: "none" }}
      >
        {" "}
        <CardActionArea> {component} </CardActionArea>{" "}
      </NavLink>
    );
  }

  return component;
}
