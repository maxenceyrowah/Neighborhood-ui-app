import { makeStyles } from "@material-ui/core";
import PriceRange from "./PriceRange";

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

const DashboardRange = () => {
  const classes = useStyles();

  return (
    <PriceRange
      containerStyle={classes.container}
      rangeStyle={classes.range}
      isExist={true}
      description="Personalize, save, compare searches and more!"
      createAccount="Create your free account"
      login="Already have an account? Log In"
    />
  );
};

export default DashboardRange;
