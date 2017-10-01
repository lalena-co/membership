import React from 'react';

const Wallet = (props) => {
  return (
    <div>
      {`Ethereum Wallet Address: ${props.ethWalletId || 'n/a'}`}
    </div>
  );
}

export default Wallet;
