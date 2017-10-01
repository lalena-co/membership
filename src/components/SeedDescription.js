import React from 'react';
import Text from 'components/Text';
import v from 'vudu';

const localClasses = v({
  text: {
    fontSize: '12px',
    marginBottom: '20px',
  },
});

const SeedDescription = () => {
  return (
    <Text classes={localClasses.text}>
      {'WARNING: You can only do this once. Make sure you have entered the correct Ethereum wallet address!'}
    </Text>
  );
}

export default SeedDescription;
