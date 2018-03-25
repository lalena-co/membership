import React from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { containers } from 'config';

import WavingHand from 'components/emojis/WavingHand';
import Ticket from 'components/emojis/Ticket';
import QuestionMark from 'components/emojis/QuestionMark';

import v from 'vudu';
import { styles as s, breakpoints, colors } from 'stylesheet';

const localClasses = v({
  nav: {
    '@composes': [
      s.flex,
      s.justifyCenter,
    ],
    width: '100%',
    paddingTop: '20px',
    borderTop: `1px solid ${colors.black}`,
  },
  emoji: {
    display: 'none',
    [breakpoints.desktop]: {
      display: 'inline',
    },
  },
  link: {
    '@composes': [
      s.navLink,
    ],
    padding: '0 10px',
  },
});

const {
  Edit,
  Login,
  Membership,
  SignUp,
} = containers;

const Navigation = (props) => {
  const { actions, currentUser, location } = props;
  return (
    <nav className={localClasses.nav}>
      <a
        className={localClasses.link}
        target={'_blank'}
        rel={'noopener'}
        href={'https://medium.com/@lalena_co/how-to-add-lla-tokens-to-a-myetherwallet-account-2bf9561d1f63'}
      >
        <span className={localClasses.emoji}><QuestionMark /></span>
        <span className={'text'}>{'Help'}</span>
      </a>
      <Switch location={location}>
        {currentUser ? [
          <Route key={'membership'} exact path={Membership.path}>
            <a className={localClasses.link} onClick={actions.signOutUser}>
              <span className={localClasses.emoji}><WavingHand /></span>
              <span className={'text'}>{'Sign Out'}</span>
            </a>
          </Route>,
          <Route key={'edit'} exact path={Edit.path}>
            <a className={localClasses.link} onClick={actions.signOutUser}>
              <span className={localClasses.emoji}><WavingHand /></span>
              <span className={'text'}>{'Sign Out'}</span>
            </a>
          </Route>,
        ] : (
          <Route key={'sign up'} exact path={SignUp.path}>
            <NavLink className={localClasses.link} to={Login.path}>
              <span className={localClasses.emoji}><Ticket /></span>
              <span className={'text'}>{'Login'}</span>
            </NavLink>
          </Route>
        )}

      </Switch>
    </nav>
  );
}

export default Navigation;
