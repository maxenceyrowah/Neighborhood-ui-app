import { makeStyles } from "@material-ui/core";
import PriceRange from "./PriceRange";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  range: {
    width: "100%",
    border: "1px solid black",
    textAlign: "center",
    padding: 10,
    borderRadius: 5,
    height: 50,
  },
}));

const ResponsiveRange = () => {
  const classes = useStyles();

  return (
    <PriceRange
      containerStyle={classes.container}
      rangeStyle={classes.range}
    />
  );
};

export default ResponsiveRange;
