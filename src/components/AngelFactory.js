import React from 'react';
import Text from 'components/Text';
import v from 'vudu';

const localClasses = v({
  title: {
    marginBottom: '10px',
  }
});

const AngelFactory = ({ tokens }) => {
  console.log(tokens)
  const renderBalance = (rawBalance) => {
    return (rawBalance / 1000000000000000000).toFixed(2);
  }

  return (
    <div>
      <Text classes={localClasses.title} variant={'h5'}>{'Angel Factory'}</Text>
      <Text variant={'h6'}>{'Balance'}</Text>
      <Text>{renderBalance(tokens[0].balance)}{' LLA'}</Text>
    </div>
  );
}

export default AngelFactory;
