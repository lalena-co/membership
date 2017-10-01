import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from 'components/svgs/Logo';
import v from 'vudu';
import { styles as s, colors } from 'stylesheet';

const localClasses = v({
  header: {
    '@composes': [
      s.flex,
      s.justifyCenter,
    ],
    padding: '20px',
    marginBottom: '20px',
    borderBottom: `1px solid ${colors.black}`,
  },
  link: {
    '@composes': [
      s.block,
    ],
    width: '10%',
  }
});

const Header = () => {
  return (
    <header className={localClasses.header}>
      <NavLink className={localClasses.link} to={'/'}>
        <Logo />
      </NavLink>
    </header>
  );
}

export default Header;
