import React from "react";

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

export default TechItem;
