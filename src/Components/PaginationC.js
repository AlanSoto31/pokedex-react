import React from 'react';
import PropTypes from 'prop-types';
import Pagination from 'react-bootstrap/Pagination';

const PaginationC = ({ increment, decrement, page }) => (
  <>
    <Pagination>
      <Pagination.Prev onClick={decrement} />
      <Pagination.Item>{page}</Pagination.Item>
      <Pagination.Next onClick={increment} />
    </Pagination>
  </>
);

PaginationC.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
};

export default PaginationC;
