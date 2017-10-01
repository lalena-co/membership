import React from 'react';
import Emojify from 'react-emojione';

const Television = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':tv:'}</span>
    </Emojify>
  );
};

Television.defaultProps = {
  width: 15,
  height: 15,
};

export default Television;
