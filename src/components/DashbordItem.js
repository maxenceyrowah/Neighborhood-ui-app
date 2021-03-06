import { Button, makeStyles } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
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
import DashboardRange from "./DashboardRange";
import MetricIcons from "./MetricIcons";

const useStyles = makeStyles((theme) => ({
  options: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
  },
  item: {
    padding: 5,
    border: "1px solid black",
    borderRadius: 15,
    textAlign: "center",
  },
}));

const DashbordItem = () => {
  const classes = useStyles();

  return (
    <>
      <h3>KEY METRICS</h3>

      <div className={classes.options}>
        <div className={classes.item}>
          <Button>
            <AiOutlineShoppingCart fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <BsFillBrightnessHighFill fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <IoMdSchool fontSize={40} />
          </Button>
        </div>
      </div>

      <div className={classes.options}>
        <div className={classes.item}>
          <Button>
            <FaHome fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <FiAperture fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <FaCarSide fontSize={40} />
          </Button>
        </div>
      </div>

      <div className={classes.options}>
        <div className={classes.item}>
          <Button>
            <FaPrayingHands fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <ImAirplane fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <MdAccountBalance fontSize={40} />
          </Button>
        </div>
      </div>

      <div className={classes.options}>
        <div className={classes.item}>
          <Button>
            <MdWork fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            {" "}
            <BiWalk fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <AiOutlineSafety fontSize={40} />
          </Button>
        </div>
      </div>

      <div className={classes.options}>
        <div className={classes.item}>
          <Button>
            <FaTree fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <AiFillHeart fontSize={40} />
          </Button>
        </div>
        <div className={classes.item}>
          <Button>
            <FaPaintBrush fontSize={40} />
          </Button>
        </div>
        <MetricIcons
          icon={<AiOutlineShoppingCart fontSize={40} />}
          styles={classes.item}
        />
        <MetricIcons
          icon={<BsFillBrightnessHighFill fontSize={40} />}
          styles={classes.item}
        />
        <MetricIcons
          icon={<IoMdSchool fontSize={40} />}
          styles={classes.item}
        />
      </div>

      <div className={classes.options}>
        <MetricIcons icon={<FaHome fontSize={40} />} styles={classes.item} />
        <MetricIcons
          icon={<FiAperture fontSize={40} />}
          styles={classes.item}
        />
        <MetricIcons icon={<FaCarSide fontSize={40} />} styles={classes.item} />
      </div>

      <div className={classes.options}>
        <MetricIcons
          icon={<FaPrayingHands fontSize={40} />}
          styles={classes.item}
        />
        <MetricIcons
          icon={<ImAirplane fontSize={40} />}
          styles={classes.item}
        />
        <MetricIcons
          icon={<MdAccountBalance fontSize={40} />}
          styles={classes.item}
        />
      </div>

      <div className={classes.options}>
        <MetricIcons icon={<MdWork fontSize={40} />} styles={classes.item} />
        <MetricIcons icon={<BiWalk fontSize={40} />} styles={classes.item} />
        <MetricIcons
          icon={<AiOutlineSafety fontSize={40} />}
          styles={classes.item}
        />
      </div>

      <div className={classes.options}>
        <MetricIcons icon={<FaTree fontSize={40} />} styles={classes.item} />
        <MetricIcons
          icon={<AiFillHeart fontSize={40} />}
          styles={classes.item}
        />
        <MetricIcons
          icon={<FaPaintBrush fontSize={40} />}
          styles={classes.item}
        />
      </div>
      <DashboardRange />
    </>
  );
};

export default DashbordItem;
