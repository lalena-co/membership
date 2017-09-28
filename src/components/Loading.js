import React from 'react';
import v from 'vudu';
import { styles as s } from 'stylesheet';

const localClasses = v({
  loading: {
    '@composes': [
      s.flex,
      s.alignCenter,
      s.justifyCenter,
    ],
    minHeight: '100vh',
  },
});

const Loading = () => <div className={localClasses.loading}><p>{'Loading...'}</p></div>;

export default Loading;
