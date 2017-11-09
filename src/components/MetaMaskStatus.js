import 'babel-polyfill'
import React from 'react';
import NetworkStatus from 'react-web3-network-status'
import Text from 'components/Text';
import v from 'vudu';
import { colors } from 'stylesheet';

const localClasses = v({
  header: {
    marginBottom: '40px',
  },
  status: {
    padding: '10px 0',
  },
  note: {
    fontSize: '10px',
    'a': {
      color: colors.purple,
    }
  },
});

const MetaMaskStatus = () => {
  return (
    <div className={localClasses.header}>
      <Text variant={'h3'}>{'MetaMask Network Status'}</Text>
      <div className={localClasses.status}><NetworkStatus /></div>
      <Text classes={localClasses.note}>
        <b>{'Note:'}</b>
        {' This requires installation of '}
        <a rel={'noopener'} target={'_blank'} href={'https://metamask.io/'}>{'MetaMask'}</a>
      </Text>
    </div>
  );
}

export default MetaMaskStatus;
