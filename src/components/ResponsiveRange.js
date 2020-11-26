import {
  makeStyles,
  Switch,
  withStyles,
  FormGroup,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import PriceRange from "./PriceRange";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  switch: {
    fontSize: "small",
    marginLeft: 5,
  },
  range: {
    width: "100%",
    border: "1px solid black",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    height: 50,
  },
  account: {
    marginTop: 5,
    width: "100%",
    border: "1px solid black",
    borderRadius: 15,
    padding: 5,
    fontSize: 13,
  },
}));

const AntSwitch = withStyles((theme) => ({
  root: {
    width: 28,
    height: 16,
    padding: 0,
    display: "flex",
  },
  switchBase: {
    padding: 2,
    color: theme.palette.grey[500],
    "&$checked": {
      transform: "translateX(12px)",
      color: theme.palette.common.white,
      "& + $track": {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
        borderColor: theme.palette.primary.main,
      },
    },
  },
  thumb: {
    width: 12,
    height: 12,
    boxShadow: "none",
  },
  track: {
    border: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor: theme.palette.common.white,
  },
  checked: {},
}))(Switch);
}));

const ResponsiveRange = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <h4>PRICE RANGE</h4>
        <div className={classes.switch}>
          <FormGroup>
            <Grid component="label" container alignItems="center" spacing={1}>
              <Grid item>Buy</Grid>
              <Grid item>
                <AntSwitch />
              </Grid>
              <Grid item>Rent</Grid>
            </Grid>
          </FormGroup>
        </div>
      </div>
      <div className={classes.range}>range</div>
    </>
    <PriceRange
      containerStyle={classes.container}
      rangeStyle={classes.range}
    />
  );
};

export default ResponsiveRange;
