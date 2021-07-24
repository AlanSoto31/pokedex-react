import React from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Filter = ({ onChangeFilter, types }) => {
  const flatArr = types.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    [],
  );

  const uniq = (a) => [...new Set(a)];

  const options = uniq(flatArr).map((item) => (
    <option key={item} value={item}>{item}</option>
  ));

  return (
    <div className="w-50">
      <Form.Control id="filter" className="w-100" as="select" name="filter" placeholder="Select an option" required onChange={(e) => onChangeFilter(e.target.value)}>
        <option value="ALL">All</option>
        {options}
      </Form.Control>
    </div>
  );
};

Filter.propTypes = {
  onChangeFilter: PropTypes.func.isRequired,
  types: PropTypes.arrayOf.isRequired,
};

export default Filter;
