import React from 'react';
import MailingList from 'components/MailingList';
import v from 'vudu';
import { styles as s, colors } from 'stylesheet';

const localClasses = v({
  footer: {
    '@composes': [
      s.flex,
      s.justifyCenter,
    ],
    padding: '20px',
    marginTop: '20px',
    borderTop: `1px solid ${colors.black}`,
  },
});

const Footer = () => {
  return (
    <footer className={localClasses.footer}>
      <MailingList />
    </footer>
  );
}

export default Footer;
