import React from 'react';
import Emojify from 'react-emojione';

const Ticket = (props) => {
  const { width, height } = props;
  return (
    <Emojify style={{ width, height }}>
      <span>{':tickets:'}</span>
    </Emojify>
  );
};

Ticket.defaultProps = {
  width: 15,
  height: 15,
};

export default Ticket;
