import React from 'react';
import PropTypes from 'prop-types';

function Button({ socialMedia }) {
  const handleClick = () => {
    if(socialMedia === 'Linkedin') {
      window.open('https://www.linkedin.com/in/enzogennarii/', '_blank');
    }
    if(socialMedia === 'GitHub') {
      window.open('https://github.com/enzogennarii', '_blank');
    }
  };

  return (
    <button
      className="social-media-btn"
      onClick={ handleClick }
      type="button"
    >
      { socialMedia }
    </button>
  );
}

Button.propTypes = {
  socialMedia: PropTypes.string,
}.isRequired;

export default Button;
