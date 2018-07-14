import React from "react";

/**
 * Functional component for congratulatory message
 * @function
 * @param {object} props - React props
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is passed)
 */
export default props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <span data-test="congrats-message">
          Good job! you guessed the word!
        </span>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};
