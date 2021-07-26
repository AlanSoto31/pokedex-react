import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ index, data }) => (
  <>
    { index === 0 ? <span key={Math.random()}>{data}</span> : (
      <span key={Math.random()}>
        <span className="p-2">|</span>
        {data}
      </span>
    )}
  </>
);

Info.propTypes = {
  data: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Info;
