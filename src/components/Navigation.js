import React from "react";
import "./Navigation.css";

import { withRouter } from "react-router-dom";

const Navigation = props => {
  console.log(props);

  return <div className="topnav"></div>;
};

export default withRouter(Navigation);
