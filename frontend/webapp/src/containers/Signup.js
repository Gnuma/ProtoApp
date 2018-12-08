import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

class Signup extends Component {
  render() {
    return (
      <form style={{ height: "100%" }}>
        <Paper
          elevation={1}
          style={{ width: 300, margin: "100px auto", padding: 20 }}
        >
          <Grid
            item
            container
            direction="column"
            alignItems="center"
            spacing={24}
          >
            <Grid item>
              <Typography variant="h4">Signup</Typography>
            </Grid>
            <Grid item>
              <TextField required id="username" label="Username" />
            </Grid>
            <Grid item>
              <TextField required id="email" label="E-Mail" type="email" />
            </Grid>
            <Grid item>
              <TextField
                required
                id="password1"
                label="Password"
                type="password"
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="password2"
                label="Confirm password"
                type="password"
              />
            </Grid>
            <Grid
              item
              container
              direction="row"
              alignItems="center"
              justify="center"
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ marginRight: 20 }}
              >
                Signup
              </Button>
              <Typography>Or</Typography>
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" style={{ marginLeft: 20 }}>
                  Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Paper>
      </form>
    );
  }
}

export default Signup;
