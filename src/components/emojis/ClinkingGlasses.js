import React from 'react';
import Emojify from 'react-emojione';

const ClinkingGlasses = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':champagne_glass:'}</span>
    </Emojify>
  );
};

ClinkingGlasses.defaultProps = {
  width: 15,
  height: 15,
};

export default ClinkingGlasses;
