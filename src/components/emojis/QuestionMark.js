import React from 'react';
import Emojify from 'react-emojione';

const QuestionMark = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':question:'}</span>
    </Emojify>
  );
};

QuestionMark.defaultProps = {
  width: 12,
  height: 16,
};

export default QuestionMark;
