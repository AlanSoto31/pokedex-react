import React from 'react';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

const Pagination = ({ increment, decrement, page }) => (
  <>
    <Button onClick={decrement}>Previous</Button>
    {page}
    <Button onClick={increment}>Next</Button>
  </>
);

Pagination.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default Pagination;
