import React from 'react';
import Text from 'components/Text';
import v from 'vudu';
import { colors } from 'stylesheet';

const localClasses = v({
  wallet: {
    backgroundColor: colors.pink,
    padding: '20px',
    color: colors.white,
  },
  title: {
    marginBottom: '10px',
  },
  id: {
    wordBreak: 'break-all',
  },
});

const Wallet = (props) => {
  return (
    <div className={localClasses.wallet}>
      <Text classes={localClasses.title} variant={'h5'}>{'Ethereum Wallet Address'}</Text>
      <Text classes={localClasses.id}>{props.ethWalletId || 'n/a'}</Text>
    </div>
  );
}

export default Wallet;
