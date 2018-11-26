import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/">
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <HomeIcon className={classes.icon} />
            </IconButton>
          </Link>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            ProtoApp
          </Typography>
          <Button color="inherit">Login</Button>
          <Typography color="inherit" style={{ margin: "0 10px" }}>
            or
          </Typography>
          <Button color="inherit">Signup</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ButtonAppBar);
