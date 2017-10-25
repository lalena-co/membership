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
      {'WARNING: You can only do this once. Make sure you have entered the correct Ethereum wallet address! To ensure you are distributed your staked LLA amount, STAKE YOUR CLAIM before the November 10th deadline.'}
    </Text>
  );
}

export default AngelDescription;
