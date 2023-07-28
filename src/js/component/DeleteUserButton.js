// DeleteUserButton.js
import React from 'react';
import PropTypes from 'prop-types';

const DeleteUserButton = ({ onClick }) => {
  return (
    <button className="deleteButton" onClick={onClick}>
      <i className="fa fa-trash" aria-hidden="true"></i>
    </button>
  );
};

DeleteUserButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DeleteUserButton;
