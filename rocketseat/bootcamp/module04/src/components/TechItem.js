import React from "react";
import PropTypes from "prop-types";

function TechItem(props) {
  return (
    <li>
      {props.tech}
      <button onClick={props.onDelete} style={{ marginLeft: 15 }} type="button">
        Remove
      </button>
    </li>
  );
}

TechItem.defaultProps = {
  tech: "Hidden"
};

TechItem.PropTypes = {
  tech: PropTypes.string,
  onDelete: PropTypes.func.isRequired
};

export default TechItem;
