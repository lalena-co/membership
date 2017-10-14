import React from 'react';
import Emojify from 'react-emojione';

const Angel = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':angel:'}</span>
    </Emojify>
  );
};

Angel.defaultProps = {
  width: 15,
  height: 15,
};

export default Angel;
