import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/svgs/Logo';
import Navigation from 'components/Navigation';
import v from 'vudu';
import { styles as s, colors } from 'stylesheet';

const localClasses = v({
  header: {
    '@composes': [
      s.flex,
      s.flexColumn,
      s.alignCenter,
      s.justifyCenter,
    ],
    padding: '20px 0',
    marginBottom: '20px',
    borderBottom: `1px solid ${colors.black}`,
  },
  link: {
    '@composes': [
      s.block,
    ],
    width: '10%',
    marginBottom: '20px',
  }
});

const Header = (props) => {
  return (
    <header className={localClasses.header}>
      <a className={localClasses.link} href={'https://www.lalena.co'}>
        <Logo />
      </a>
      <Navigation {...props} />
    </header>
  );
}

export default Header;
