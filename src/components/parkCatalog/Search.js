import React from "react";

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { Filter } from "./Filter";
import { TextField, InputAdornment } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { classes } from "istanbul-lib-coverage";

const useStyles = makeStyles(theme => ({
    margin: {
        margin: "auto",
        width: "50%",
        textAlign: "center",
    },
  }));

export function Search(props) {
const classes = useStyles
  return (
    <div>
       <TextField className={classes.margin}
        id="search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        inputProps={{min: 0, style: { textAlign: 'center' }}}
      />
      <Filter />
    </div>
  );
}
