import React from 'react';
import Text from 'components/Text';
import v from 'vudu';

const localClasses = v({
  text: {
    fontSize: '12px',
    marginBottom: '20px',
  },
});

const AngelDescription = () => {
  return (
    <Text classes={localClasses.text}>
      {'Details about staking your claim in our Angel round will be available soon!'}
    </Text>
  );
}

export default AngelDescription;
