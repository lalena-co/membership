import React from 'react';
import Text from 'components/Text';
import v from 'vudu';

const localClasses = v({
  title: {
    marginBottom: '10px',
  },
  balance: {
    marginBottom: '20px',
  },
});

const Factory = ({ title, tokens }) => {
  const renderBalance = (rawBalance) => {
    return (rawBalance / 1000000000000000000).toFixed(2);
  }

  return (
    <div>
      <Text classes={localClasses.title} variant={'h5'}>{`${title} Factory`}</Text>
      <Text variant={'h6'}>{'Balance'}</Text>
      <Text classes={localClasses.balance}>{renderBalance(tokens[0].balance)}{' LLA'}</Text>
    </div>
  );
}

export default Factory;
