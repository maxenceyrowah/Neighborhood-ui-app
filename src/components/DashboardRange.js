import {
  makeStyles,
  Switch,
  withStyles,
  FormGroup,
  Grid,
} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
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
    borderRadius: 15,
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

const DashboardRange = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.container}>
        <div className="title">
          <h3>PRICE RANGE</h3>
        </div>
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
      <div className={classes.account}>
        <span>Personalize, save, compare searches and more!</span>
        <div>Create your free account</div>
        <span>Already have an account? Log In</span>
      </div>
    </>
  );
};

export default DashboardRange;
