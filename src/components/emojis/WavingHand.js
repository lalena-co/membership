import React from 'react';
import Emojify from 'react-emojione';

const WavingHand = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':wave:'}</span>
    </Emojify>
  );
};

WavingHand.defaultProps = {
  width: 15,
  height: 15,
};

export default WavingHand;
