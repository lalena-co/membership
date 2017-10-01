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
  na: {
    fontSize: '12px',
  }
});

const Wallet = (props) => {
  return (
    <div className={localClasses.wallet}>
      <Text classes={localClasses.title} variant={'h5'}>{'Ethereum Wallet Address'}</Text>
      {props.ethWalletId ? (
        <Text classes={localClasses.id}>{props.ethWalletId}</Text>
      ) : (
        <Text classes={localClasses.na}>{'You do not currently have an Ethereum wallet saved to your membership. Please go to MYETHERWALLET.com to setup a ERC20 compatible wallet and EDIT your membership to enter the address (it will begin with 0x). This will allow you to create a Lalena seed and plant it for equity.'}</Text>
      )}
    </div>
  );
}

export default Wallet;
