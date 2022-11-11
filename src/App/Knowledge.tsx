import { Typography } from "@material-ui/core";
import "./AboutUs.scss";
// import config from '../config.json'
// import { FaPlus } from 'react-icons/fa';

const Content = () => {
  // const clickHandler = () => {
  //   if (config.form_url) {
  //     window.location.href = config.form_url
  //   }
  // }

  return (
    <div className="about-us">
      <div className="container">
        <div className="branding">
          <div className="logo">
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              color="common.white"
            >
              KRUMP KNOWLEDGE
            </Typography>
          </div>
        </div>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          color="common.white"
        >
          <p>Coming Soon...</p>
        </Typography>
      </div>
    </div>
  );
};

export default Content;
