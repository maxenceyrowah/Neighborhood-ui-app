import { makeStyles } from "@material-ui/core";
import FooterImg from "../assets/images/background-image.png";

const useStyles = makeStyles((theme) => ({
  background__Image: {
    backgroundImage: `url(${FooterImg})`,
    backgroundSize: "contain",
    height: 145,
    position: "relative",
    top: 37,
  },
  background__footer: {
    textAlign: "center",
    backgroundColor: "#555B6E",
    color: "#fff",
    padding: 22,
  },
}));

const DashboardFooter = () => {
  const classes = useStyles();

  return (
    <footer>
      <div className={classes.background__Image}></div>
      <div className={classes.background__footer}>
        <div className="content__footer">
          <p>
            <img src={FooterImg} alt="" className="logo__footer" />
          </p>

          <span className="description__footer">
            The Powerful Neighborhood Research Tool
          </span>
          <div className="display__link">
            <span>Phone</span>
            <span>Tablet vertical</span>
            <span>Tablet Horizontal</span>
          </div>
        </div>

        <p>
          ©2020 The Neighborhood Score. All rights reserved. By using this
          website, you agree to our Terms and Conditions and Privacy Policy
        </p>
      </div>
    </footer>
  );
};

export default DashboardFooter;
