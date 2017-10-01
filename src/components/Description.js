import React from 'react';
import Text from 'components/Text';
import v from 'vudu';
import { breakpoints, colors } from 'stylesheet';

const localClasses = v({
  description: {
    width: '85%',
    padding: '20px',
    backgroundColor: colors.black,
    color: colors.white,
    marginBottom: '20px',
    [breakpoints.desktop]: {
      width: '35%',
    },
  },
});

const Description = () => {
  return (
    <div className={localClasses.description}>
      <Text>
        {'Lalena is an open source venture capital club and agency. We create platforms for everyone; online and offline.'}
      </Text>
    </div>
  );
}

export default Description;
