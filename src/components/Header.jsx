import React from "react";
import PropTypes from "prop-types";

function Header({ title }) {
  return (
    <div className="task-container">
      <h2>{title}</h2>
      <div className="task-content">
        <h3>This is task</h3>
        <p>some text</p>
      </div>
      <div className="task-content">
        <h3>This is task</h3>
        <p>some text</p>
      </div>
      <div className="task-content">
        <h3>This is task</h3>
        <p>some text</p>
      </div>
      <div className="task-content">
        <h3>This is task</h3>
        <p>some text</p>
      </div>
      <div className="task-content">
        <h3>This is task</h3>
        <p>some text</p>
      </div>
      <div className="task-content">
        <h3>This is task</h3>
        <p>some text</p>
      </div>
      <div className="task-content">
        <h3>This is task</h3>
        <p>some text</p>
      </div>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: "Task Tracker",
};

// CSS in JS
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
