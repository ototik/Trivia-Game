import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

import { Link } from "react-router-dom";

const LinkButton = props => {
  const {
    history,
    location,
    match,
    staticContext,
    to,
    onClick,
    // ⬆ filtering out props that `button` doesn’t know what to do with.
    ...rest
  } = props;
  return (
    <button
      {...rest} // `children` is just another prop!
      onClick={event => {
        onClick && onClick(event);
        history.push(to);
      }}
    />
  );
};

LinkButton.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default withRouter(LinkButton);

class List extends React.Component {
  render() {
    return (
      <div>
        <p>Please choose a repository from the list below.</p>
        <ul>
          <li>
            <Link to="/Game">React</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default List;
