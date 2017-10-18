import React from 'react';
import Text from 'components/Text';
import v from 'vudu';
import { colors } from 'stylesheet';

const localClasses = v({
  text: {
    color: colors.white,
    marginBottom: '20px',
  }
});

const LoadingFactory = (props) => {
  return (
    <Text
      classes={localClasses.text}
      style={{ color: props.dark ? colors.black : colors.white }}
      variant={'h6'}
    >
      {'Loading Factory...'}
    </Text>
  );
};

export default LoadingFactory;
