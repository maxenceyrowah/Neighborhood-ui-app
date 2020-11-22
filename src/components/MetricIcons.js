import { Button } from "@material-ui/core";

const MetricIcons = (props) => {
  return (
    <div className={props.styles}>
      <Button>{props.icon}</Button>
      <span>{props.description}</span>
    </div>
  );
};

export default MetricIcons;
