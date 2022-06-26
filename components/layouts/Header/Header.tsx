import React from "react";
import { AppBar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  bar: {
    padding: "20px",
  },
});

const Header = () => {
  const classes = useStyles();
  return <AppBar>JunBlog</AppBar>;
};

export default Header;
