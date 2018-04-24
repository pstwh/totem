import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { MenuItem } from 'material-ui/Menu';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import Avatar from 'material-ui/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  appFrame: {
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
  },
  'appBar-left': {
    marginLeft: drawerWidth,
  },
  'appBar-right': {
    marginRight: drawerWidth,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class App extends Component {
  state = {
    anchor: 'left',
  };

  handleChange = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor } = this.state;

    const drawer = (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor={anchor}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem>
            <Avatar>
              <ImageIcon />
            </Avatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <WorkIcon />
            </Avatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <Avatar>
              <BeachAccessIcon />
            </Avatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </Drawer>
    );

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = drawer;
    } else {
      after = drawer;
    }

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, classes[`appBar-${anchor}`])}
          >
            <Toolbar>
              <Typography variant="title" color="inherit" noWrap>
                App
              </Typography>
            </Toolbar>
          </AppBar>
          {before}
          <main className={classes.content}>
            <div className={classes.toolbar} />
            <Typography>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias assumenda repudiandae ad quos blanditiis autem magni quod earum dolorem libero? Cumque, quia esse! Quod veritatis itaque hic vero ducimus cumque distinctio architecto nihil maxime, tempore aspernatur reprehenderit nostrum. Iure beatae id sed dolor eaque nulla maiores voluptate consequatur illo explicabo ipsa vel, molestias, debitis nemo? Nam maiores qui libero facere quisquam esse, delectus repellat? Magni est sapiente nulla deserunt et eum consequatur sed odit iure, ad modi saepe inventore, laudantium ex nam. Provident a dicta maiores architecto incidunt quasi ipsa minima ut laboriosam nisi nam harum asperiores, quod cumque doloribus!</Typography>
          </main>
          {after}
        </div>
      </div>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);