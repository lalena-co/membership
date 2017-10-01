import React from 'react';
import Text from 'components/Text';
import v from 'vudu';

const localClasses = v({
  title: {
    marginBottom: '5px',
  },
  id: {
    wordBreak: 'break-all',
    marginBottom: '20px',
  },
  amount: {
    marginBottom: '20px',
  },
  description: {
    fontSize: '12px',
    marginBottom: '20px',
  },
});

const Seed = (props) => {
  return (
    <div>
      <Text classes={localClasses.title} variant={'h5'}>{`Seeded Address:`}</Text>
      <Text classes={localClasses.id}>{props.ethWalletId || 'n/a'}</Text>
      <Text classes={localClasses.amount}>{`${props.issued} LLA`}</Text>
      <Text classes={localClasses.description}>
        {'Seeded LLA will close and begin distribution on October 9th, 2017 at 17:00. Please allow up to 72 hours after the closing date for distribution to your Ethereum wallet.'}
      </Text>
      <Text classes={localClasses.description}>
        {'To see LLA in your Ethereum wallet, ADD CUSTOM TOKEN and use the smart contract address 0x1db186898bccde66fa64a50e4d81078951a30dbe. The TICKER will be LLA with 18 DECIMALS.'}
      </Text>
    </div>
  );
}

export default Seed;
