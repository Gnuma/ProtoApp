import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

export default class CommentForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Grid
          container
          spacing={24}
          direction="column"
          alignItems="center"
          style={{ marginBottom: "20px" }}
        >
          <Grid item>
            <TextField name="title" label="Title" margin="normal" />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="body"
              label="Content"
              margin="normal"
              multiline
              variant="outlined"
              style={{ width: 400 }}
            />
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Add Comment
            </Button>
          </Grid>
        </Grid>
      </form>
    );
  }
}
