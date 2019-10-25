import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  FormControlLabel,
  Checkbox,
  Button
} from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import PropTypes from "prop-types";

import { SEARCH_MODE_DEFAULT, SEARCH_MODE_AND, SEARCH_MODE_OR } from "../../tools/constants";

export default function SearchBar({ onChange }){
  const classes = useStyles();
  const [query, setQuery] = useState('');
  const [mode, setMode] = useState(SEARCH_MODE_DEFAULT);

  const resetSearch = () => {
    setQuery('');
    setMode(SEARCH_MODE_DEFAULT);
    onChange('', SEARCH_MODE_DEFAULT);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Records
          </Typography>

          <FormControlLabel
            control={
              <Checkbox
                checked={mode === SEARCH_MODE_AND}
                onChange={() => setMode(SEARCH_MODE_AND)}
              />
            }
            label={SEARCH_MODE_AND}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={mode === SEARCH_MODE_OR}
                onChange={() => setMode(SEARCH_MODE_OR)}
              />
            }
            label={SEARCH_MODE_OR}
          />

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon/>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              value={query}
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={(e) => e.key === 'Enter' && onChange(query, mode)}
            />
          </div>
        </Toolbar>
        <Button
          className={classes.button}
          variant="contained" color="secondary"
          onClick={() => resetSearch()}
        >
          RESET
        </Button>
      </AppBar>
    </div>
  );
}

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 2,
    minWidth: "650px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
}));