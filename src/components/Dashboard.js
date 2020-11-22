import { useState } from "react";
import {
  makeStyles,
  fade,
  withStyles,
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  Divider,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

import LogoImg from "../assets/icons/TNS-logo-dark.png";

import Mapbox from "./Mapbox.js";
import DashbordItem from "./DashbordItem";
import DashboardAccordion from "./DashboardAccordion";
import DashbordFooter from "./DashboardFooter";
import ResponsiveMetric from "./ResponsiveMetric";
import ResponsiveRange from "./ResponsiveRange";

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    color: "#000",
    width: "100%",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: "100%",
    height: 90,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: 90,
  },
  drawerHeader: {
    display: "flex",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "center",
    margin: "10px auto",
  },
  content: {
    flexGrow: 1,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    minWidth: 450,
    fontSize: "small",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  contentDrawer: {
    display: "flex",
    justifyContent: "flex-start",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
  },
  main__title: {
    textAlign: "center",
    marginBottom: 30,
    marginTop: 30,
  },
  main__subtitle: {
    height: 62,
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 6px #00000029",
    border: "1px solid #E2E3E5",
    borderRadius: 15,
    opacity: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    fontSize: "x-large",
    color: "#74B9FF",
  },
  mapbox__description: {
    position: "relative",
    top: -70,
    padding: 10,
    borderRadius: 18,
    margin: "0 15px 0px 15px",
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 0px 6px #00000029",
    display: "flex",
    justifyContent: "space-around",
  },
  wrapper__logo: {
    position: "relative",
    left: -20,
  },
}));

const StyledToolbar = withStyles({
  root: {
    display: "flex",
    position: "relative",
    alignItems: "center",
    height: "inherit",
    backgroundColor: "#fff",
  },
})(Toolbar);

const Dashboard = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [metricContent, setMetricContent] = useState(false);
  const [RangeContent, setRangeContent] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const displayMetric = (content) => {
    if (content && content === "metric") {
      setMetricContent(!metricContent);
    }
  };

  const displayRange = (content) => {
    if (content && content === "range") {
      setRangeContent(!RangeContent);
    }
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBarShift} color="inherit">
        <StyledToolbar className="wrapper__toolbar">
          <div className={classes.wrapper__logo}>
            <div className={classes.drawerHeader}>
              <img src={LogoImg} alt="" className="logoImg" />
            </div>
          </div>

          <div className={classes.container}>
            <div className="toolbar__search">
              <span className="title__search">
                Empowering people when choosing their neighborhood.
              </span>
              <div className="searchBar">
                <div className="searchBar__geocoder">
                  <div
                    className="geocoder__style"
                    id="geoCoder-searchBar"
                  ></div>
                </div>
                <div className="searchBar__menu">
                  <div className={classes.toolbarMenu}>
                    <Button
                      aria-controls="simple-menu"
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MenuIcon />
                    </Button>
                    <Menu
                      id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}
                    >
                      <MenuItem>Profile</MenuItem>
                      <MenuItem>My account</MenuItem>
                      <MenuItem>Logout</MenuItem>
                    </Menu>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StyledToolbar>
        <Divider />
        <div className="responsive">
          <div className="responsive__button">
            <button
              className="metric__style"
              onClick={(e) => displayMetric("metric")}
            >
              Key Metrics
            </button>
            <button
              className="range__style"
              onClick={(e) => displayRange("range")}
            >
              Price Range
            </button>
          </div>
          <Divider />
          {metricContent ? (
            <div className="content__responsive">
              <ResponsiveMetric />
            </div>
          ) : (
            RangeContent && (
              <div className="content__responsive">
                <ResponsiveRange />
              </div>
            )
          )}
        </div>
      </AppBar>

      <Drawer
        className={classes.drawer}
        id="drawer"
        variant="permanent"
        anchor="left"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <div className={classes.contentDrawer}>
          <DashbordItem />
        </div>
      </Drawer>

      <main className={classes.content}>
        <div className={classes.drawerHeader} />
        <div className="mapbox-content">
          <Mapbox />
          <div className={classes.mapbox__description}>
            <div className="country__name">
              Selected Area:{" "}
              <span id="country__name">United States of America</span>
            </div>
            <div className="country__hovername">
              Hovered Area: <span id="country__hovername"></span>
            </div>
            <div className="legend__color">Score:</div>
          </div>
        </div>

        <div style={{ padding: 24 }}>
          <h2 className={classes.main__title}>Score Summary</h2>
          <div className={classes.main__subtitle}>
            My Neighborhood Score — 749/1000
          </div>
          <div className="main__accordion">
            <DashboardAccordion />
          </div>
        </div>
        <DashbordFooter />
      </main>
    </div>
  );
};

export default Dashboard;
