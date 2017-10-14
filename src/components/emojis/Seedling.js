import React from 'react';
import Emojify from 'react-emojione';

const Seedling = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':seedling:'}</span>
    </Emojify>
  );
};

Seedling.defaultProps = {
  width: 15,
  height: 15,
};

export default Seedling;
