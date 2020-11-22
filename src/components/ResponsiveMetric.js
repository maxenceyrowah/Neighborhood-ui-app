import { Button, makeStyles } from "@material-ui/core";
import {
  AiOutlineShoppingCart,
  BsFillBrightnessHighFill,
  IoMdSchool,
  FaHome,
  FaCarSide,
  FiAperture,
  FaPrayingHands,
  ImAirplane,
  MdAccountBalance,
  MdWork,
  BiWalk,
  AiOutlineSafety,
  AiFillHeart,
  FaPaintBrush,
  FaTree,
} from "react-icons/all";

const useStyles = makeStyles((theme) => ({
  line: {
    display: "flex",
    alignItems: "center",
  },
}));

const ResponsiveMetric = () => {
  const classes = useStyles();

  return (
    <>
      <h4>KEY METRICS</h4>
      <div className="metric__content">
        <div className="column">
          <div className={classes.line}>
            <Button>
              <AiOutlineShoppingCart fontSize={30} />
            </Button>
            <span>Access to Amenities</span>
          </div>
          <div className={classes.line}>
            <Button>
              <BsFillBrightnessHighFill fontSize={30} />
            </Button>
            <span>Weather & Environmental</span>
          </div>
          <div className={classes.line}>
            <Button>
              <IoMdSchool fontSize={30} />
            </Button>
            <span>School Quality</span>
          </div>
          <div className={classes.line}>
            <Button>
              <FaHome fontSize={30} />
            </Button>
            <span>Affordability & Home Value</span>
          </div>
          <div className={classes.line}>
            <Button>
              <FiAperture fontSize={30} />
            </Button>
            <span>Demographics & Socioeconomics</span>
          </div>
        </div>

        <div className="column">
          <div className={classes.line}>
            <Button>
              <FaCarSide fontSize={30} />
            </Button>
            <span>Access to Amenities</span>
          </div>
          <div className={classes.line}>
            <Button>
              <FaPrayingHands fontSize={30} />
            </Button>
            <span>Weather & Environmental</span>
          </div>
          <div className={classes.line}>
            <Button>
              <ImAirplane fontSize={30} />
            </Button>
            <span>School Quality</span>
          </div>
          <div className={classes.line}>
            <Button>
              <MdAccountBalance fontSize={30} />
            </Button>
            <span>Affordability & Home Value</span>
          </div>
          <div className={classes.line}>
            <Button>
              <MdWork fontSize={30} />
            </Button>
            <span>Demographics & Socioeconomics</span>
          </div>
        </div>

        <div className="column">
          <div className={classes.line}>
            <Button>
              <BiWalk fontSize={30} />
            </Button>
            <span>Access to Amenities</span>
          </div>
          <div className={classes.line}>
            <Button>
              <AiOutlineSafety fontSize={30} />
            </Button>
            <span>Weather & Environmental</span>
          </div>
          <div className={classes.line}>
            <Button>
              <FaTree fontSize={30} />
            </Button>
            <span>School Quality</span>
          </div>
          <div className={classes.line}>
            <Button>
              <AiFillHeart fontSize={30} />
            </Button>
            <span>Affordability & Home Value</span>
          </div>
          <div className={classes.line}>
            <Button>
              <FaPaintBrush fontSize={30} />
            </Button>
            <span>Demographics & Socioeconomics</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResponsiveMetric;
