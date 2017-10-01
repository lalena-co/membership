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

const CreateSeed = (props) => {
  return (
    <div>
      <a className={localClasses.link} onClick={props.handleCreate}>{'Plant Your Seed'}</a>
    </div>
  );
}

export default CreateSeed;
