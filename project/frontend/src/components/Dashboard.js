import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import TextField from '@material-ui/core/TextField';
import {Done} from '@material-ui/icons';
import Button from '@material-ui/core/Button';
import {mainListItems, secondaryListItems} from './listItems';
import UrlsTable from './UrlsTable';
import Grid from '@material-ui/core/Grid';
import DataProvider from "./DataProvider"
import styles from "./DashboardStyles";


class Dashboard extends React.Component {
  state = {
    open: true,
    seconds: 10
  };

  constructor(props) {
    super(props);
    this.checkIntervalRef = React.createRef();
  }

  handleDrawerOpen = () => {
    this.setState({open: true});
  };

  handleDrawerClose = () => {
    this.setState({open: false});
  };

  handleChange = () => {
  };

  handleClick = () => {
    this.setState(() => {});
  };

  render() {
    const {classes} = this.props;

    return (
      <React.Fragment>
        <CssBaseline/>
        <div className={classes.root}>
          <AppBar
            position="absolute"
            className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
                className={classNames(
                  classes.menuButton,
                  this.state.open && classes.menuButtonHidden,
                )}
              >
                <MenuIcon/>
              </IconButton>
              <Typography
                component="h1"
                variant="h6"
                color="inherit"
                noWrap
                className={classes.title}
              >
                Do Register
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer
            variant="permanent"
            classes={{
              paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
            }}
            open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon/>
              </IconButton>
            </div>
            <Divider/>
            <List>{mainListItems}</List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer}/>
            <Grid container spacing={24}>
              <Grid item xs={8}>
                <Typography variant="h4" gutterBottom component="h2">
                  Registered Urls
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="check-interval"
                  label="Check Interval, sec"
                  onChange={this.handleChange()}
                  ref={this.checkIntervalRef}
                  type="number"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
              <Grid item xs={2}>
                <Button variant="fab" mini color="secondary"
                        aria-label="Done"
                        onClick={this.handleClick}
                        className={classes.button}>
                  <Done/>
                </Button>
              </Grid>
            </Grid>
            <div className={classes.tableContainer}>
              <DataProvider endpoint="api/addresses"
                            render={data => <UrlsTable data={data}/>}/>
            </div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);