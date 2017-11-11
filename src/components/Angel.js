import React from 'react';
import Text from 'components/Text';
import v from 'vudu';

const localClasses = v({
  title: {
    marginBottom: '5px',
  },
  id: {
    wordBreak: 'break-all',
    fontSize: '10px',
    marginBottom: '20px',
  },
  amount: {
    marginBottom: '20px',
  },
  description: {
    fontSize: '12px',
  },
});

const Angel = (props) => {
  return (
    <div>
      <Text classes={localClasses.title} variant={'h5'}>{`Angel Wallet:`}</Text>
      <Text classes={localClasses.id}>{props.ethWalletId || 'n/a'}</Text>
      <Text classes={localClasses.amount}>{`${props.issued} LLA issued`}</Text>
      <Text classes={localClasses.description}>
        {'The Angel Factory closed the staking pool and began distribution on November 10th, 2017 at 17:00. Please allow up to 72 hours after the closing date for distribution to your Ethereum wallet.'}
      </Text>
    </div>
  );
}

export default Angel;
