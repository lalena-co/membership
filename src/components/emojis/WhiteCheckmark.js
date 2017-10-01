import React from 'react';
import Emojify from 'react-emojione';

const WhiteCheckmark = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':white_check_mark:'}</span>
    </Emojify>
  );
};

WhiteCheckmark.defaultProps = {
  width: 15,
  height: 15,
};

export default WhiteCheckmark;
