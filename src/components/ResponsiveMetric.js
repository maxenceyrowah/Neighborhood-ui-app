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
import MetricIcons from "./MetricIcons";

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
          <MetricIcons
            icon={<AiOutlineShoppingCart fontSize={30} />}
            styles={classes.line}
            description="Access to Amenities"
          />

          <MetricIcons
            icon={<BsFillBrightnessHighFill fontSize={30} />}
            styles={classes.line}
            description="Weather & Environmental"
          />
          <MetricIcons
            icon={<IoMdSchool fontSize={30} />}
            styles={classes.line}
            description="School Quality"
          />

          <MetricIcons
            icon={<FaHome fontSize={30} />}
            styles={classes.line}
            description="Affordability & Home Value"
          />

          <MetricIcons
            icon={<FiAperture fontSize={30} />}
            styles={classes.line}
            description="Demographics & Socioeconomics"
          />
        </div>

        <div className="column">
          <MetricIcons
            icon={<FaCarSide fontSize={30} />}
            styles={classes.line}
            description="Work Commute"
          />
          <MetricIcons
            icon={<FaPrayingHands fontSize={30} />}
            styles={classes.line}
            description="Religion"
          />
          <MetricIcons
            icon={<ImAirplane fontSize={30} />}
            styles={classes.line}
            description="Near Public Transit"
          />
          <MetricIcons
            icon={<MdAccountBalance fontSize={30} />}
            styles={classes.line}
            description="Politics"
          />
          <MetricIcons
            icon={<MdWork fontSize={30} />}
            styles={classes.line}
            description="Job Opportunities"
          />
        </div>

        <div className="column">
          <MetricIcons
            icon={<BiWalk fontSize={30} />}
            styles={classes.line}
            description="Walkability"
          />
          <MetricIcons
            icon={<AiOutlineSafety fontSize={30} />}
            styles={classes.line}
            description="Crime & Safety"
          />
          <MetricIcons
            icon={<FaTree fontSize={30} />}
            styles={classes.line}
            description="Access to Parks & Outdoor Rec"
          />
          <MetricIcons
            icon={<AiFillHeart fontSize={30} />}
            styles={classes.line}
            description="Dating Life"
          />
          <MetricIcons
            icon={<FaPaintBrush fontSize={30} />}
            styles={classes.line}
            description="Access to Arts & Culture"
          />
        </div>
      </div>
    </>
  );
};

export default ResponsiveMetric;
