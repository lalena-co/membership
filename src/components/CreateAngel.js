import React from 'react';
import v from 'vudu';
import { styles as s } from 'stylesheet';

const localClasses = v({
  link: {
    '@composes': [
      s.button,
    ]
  }
});

const CreateAngel = (props) => {
  return (
    <div>
      <a className={localClasses.link} onClick={props.handleCreate}>{'Stake Your Claim'}</a>
    </div>
  );
}

export default CreateAngel;
