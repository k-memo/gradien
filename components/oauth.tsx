// components/OAuth.js
import React from 'react';
import PropTypes from 'prop-types';

const OAuth = ({ company, handleLogin }) => {
  return (
    <button className="login btn-second" onClick={handleLogin}>
      Login
    </button>
  );
};

OAuth.propTypes = {
  company: PropTypes.string.isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default OAuth;
