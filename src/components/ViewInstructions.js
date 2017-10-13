import React from 'react';
import Text from 'components/Text';
import v from 'vudu';
import { styles as s, colors } from 'stylesheet';

const localClasses = v({
  viewInstructions: {
    backgroundColor: colors.blue,
    color: colors.white,
    padding: '20px',
    'span': {
      wordBreak: 'break-all',
    }
  },
  description: {
    fontSize: '12px',
  },
});

const ViewInstructions = () => {
  return (
    <div className={localClasses.viewInstructions}>
      <Text classes={localClasses.description}>
        {'To see LLA in your Ethereum wallet, ADD CUSTOM TOKEN and use the smart contract address '}
        <span>{'0x1db186898bccde66fa64a50e4d81078951a30dbe'}</span>
        {'. The TICKER will be LLA with 18 DECIMALS.'}
      </Text>
    </div>
  );
}

export default ViewInstructions;
