// EditUserButton.js
import React from 'react';
import PropTypes from 'prop-types';

const EditUserButton = ({ onClick }) => {
  return (
    <button className="editButton" onClick={onClick}>
      <i className="fa fa-pencil" aria-hidden="true"></i>
    </button>
  );
};

EditUserButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default EditUserButton;
