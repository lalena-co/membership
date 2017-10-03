import React from 'react';
import Emojify from 'react-emojione';

const HelmetWithCross = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':helmet_with_cross:'}</span>
    </Emojify>
  );
};

HelmetWithCross.defaultProps = {
  width: 15,
  height: 18,
};

export default HelmetWithCross;
