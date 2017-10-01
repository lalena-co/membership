import React from 'react';
import Emojify from 'react-emojione';

const PointLeft = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':point_left:'}</span>
    </Emojify>
  );
};

PointLeft.defaultProps = {
  width: 15,
  height: 13,
};

export default PointLeft;
