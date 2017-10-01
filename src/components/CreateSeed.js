import React from 'react';

const CreateSeed = (props) => {
  return (
    <div>
      <a onClick={props.handleCreate}>{'Create Seed'}</a>
    </div>
  );
}

export default CreateSeed;
