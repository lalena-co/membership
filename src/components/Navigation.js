import React from 'react';
import { Switch, Route } from 'react-router';
import { NavLink } from 'react-router-dom';
import { containers } from 'config';

import WavingHand from 'components/emojis/WavingHand';
import Television from 'components/emojis/Television';
import Ticket from 'components/emojis/Ticket';
import WritingHand from 'components/emojis/WritingHand';

import v from 'vudu';
import { styles as s, colors } from 'stylesheet';

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
      <a className={localClasses.link} href='https://www.lalena.co/'>
        <Television />
        <span className={'text'}>{'Watchlist'}</span>
      </a>
      <Switch location={location}>
        {currentUser ? [
          <Route key={'membership'} exact path={Membership.path}>
            <a className={localClasses.link} onClick={actions.signOutUser}>
              <WavingHand />
              <span className={'text'}>{'Sign Out'}</span>
            </a>
          </Route>,
          <Route key={'edit'} exact path={Edit.path}>
            <a className={localClasses.link} onClick={actions.signOutUser}>
              <WavingHand />
              <span className={'text'}>{'Sign Out'}</span>
            </a>
          </Route>,
        ] : [
          <Route key={'login'} exact path={Login.path}>
            <NavLink className={localClasses.link} to={SignUp.path}>
              <WritingHand />
              <span className={'text'}>{'Sign Up'}</span>
            </NavLink>
          </Route>,
          <Route key={'sign up'} exact path={SignUp.path}>
            <NavLink className={localClasses.link} to={Login.path}>
              <Ticket />
              <span className={'text'}>{'Login'}</span>
            </NavLink>
          </Route>,
        ]}

      </Switch>
    </nav>
  );
}

export default Navigation;