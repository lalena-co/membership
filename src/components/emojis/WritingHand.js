import React from 'react';
import Emojify from 'react-emojione';

const WritingHand = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':writing_hand:'}</span>
    </Emojify>
  );
};

WritingHand.defaultProps = {
  width: 15,
  height: 14,
};

export default WritingHand;
