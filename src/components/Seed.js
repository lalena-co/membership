import React from 'react';

const Seed = (props) => {
  return (
    <div>
      <span>{`Seeded Address: ${props.ethWalletId || 'n/a'}`}</span>
      <span>{`${props.issued} LLA`}</span>
    </div>
  );
}

export default Seed;
