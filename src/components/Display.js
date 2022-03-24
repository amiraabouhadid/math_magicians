import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { text } = props;
  return (
    <p>{text}</p>
  );
};
Display.propTypes = { text: PropTypes.string.isRequired };

export default Display;
