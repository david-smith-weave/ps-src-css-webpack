import PropTypes from "prop-types";
import React from "react";

function Nav(props) {
  return (
    <div className="dft__nav">
      <button
        className="dft__nav__btn dft__nav__btn--prev"
        onClick={props.onPrevious}
      >
        &#10094;
      </button>
      <button
        className="dft__nav__btn dft__nav__btn--next"
        onClick={props.onNext}
      >
        &#10095;
      </button>
    </div>
  );
}

Nav.propTypes = {
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
  hasPrevious: PropTypes.bool,
  hasNext: PropTypes.bool
};

export default Nav;
