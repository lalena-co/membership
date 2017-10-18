import React from 'react';
import Text from 'components/Text';
import v from 'vudu';

const localClasses = v({
  credit: {
    fontSize: '10px',
    'a': {
      color: 'inherit',
    }
  },
});

const FactoryCredit = () => {
  return (
    <Text classes={localClasses.credit}>
      {'Powered by '}
      <a target={'_blank'} rel={'noopener'} href={'https://ethplorer.io/'}>{'Ethplorer.io'}</a>
    </Text>
  );
}

export default FactoryCredit;
