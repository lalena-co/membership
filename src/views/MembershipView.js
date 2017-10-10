import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ClinkingGlasses from 'components/emojis/ClinkingGlasses';
import WhiteCheckmark from 'components/emojis/WhiteCheckmark';
import Text from 'components/Text';
import Seed from 'components/Seed';
import CreateSeed from 'components/CreateSeed';
import Wallet from 'components/Wallet';
import SeedDescription from 'components/SeedDescription';
import v from 'vudu';
import { styles as s, breakpoints, colors } from 'stylesheet';

const localClasses = v({
  membershipView: {
    '@composes': [
      s.flex,
      s.justifyCenter,
      s.flexColumn,
      s.alignCenter,
    ],
    textAlign: 'center',
    padding: '0 25px',
    [breakpoints.desktop]: {
      padding: '0 50px',
    },
  },
  section: {
    width: '90%',
    marginBottom: '20px',
    [breakpoints.desktop]: {
      width: '50%',
    },
  },
  email: {
    '@composes': [
      s.flex,
      s.justifyCenter,
      s.alignBase,
    ],
  },
  seed: {
    border: `1px solid ${colors.green}`,
    padding: '20px',
  },
  header: {
    marginBottom: '20px',
  },
  secondaryLink: {
    '@composes': [
      s.smallWarningLink,
    ],
  },
  verify: {
    marginLeft: '10px',
  },
  label: {
    '@composes': [
      s.label
    ]
  },
  title: {
    marginBottom: '20px',
  },
  reset: {
    marginBottom: '20px',
  },
  delete: {
    color: 'red !important',
  }
});

class MembershipView extends Component {

  handleDelete = () => this.props.actions.deleteUser();

  render = () => {
    const { actions, user, seed, wallet } = this.props;

    return (
      <div className={localClasses.membershipView}>
        <div className={localClasses.header}>
          <ClinkingGlasses />
          <Text variant={'h3'}>{'Membership'}</Text>
          <NavLink className={localClasses.secondaryLink} to={'/edit'}>{'Edit'}</NavLink>
        </div>
        <section className={[localClasses.section, localClasses.email].join(' ')}>
          <Text variant={'h4'}>{user.email}</Text>
          {user.emailVerified ? (
            <WhiteCheckmark key={'emoji'} />
          ) : (
            <a className={[localClasses.secondaryLink, localClasses.verify].join(' ')} onClick={actions.verifyUser}>
              {'Verify Email'}
            </a>
          )}
        </section>
        <section className={localClasses.section}>
          <Wallet {...wallet} />
        </section>

        {wallet && wallet.ethWalletId && (
          <section className={[localClasses.section, localClasses.seed].join(' ')}>
            <Text classes={localClasses.title} variant={'h5'}>{'Seed'}</Text>
            {!seed && (
              <SeedDescription />
            )}
            {seed && <Seed {...seed} />}
          </section>
        )}

        <a className={[localClasses.secondaryLink, localClasses.reset].join(' ')} onClick={() => actions.resetPassword(user.email)}>
          {'Reset Password'}
        </a>
        <a className={[localClasses.secondaryLink, localClasses.delete].join(' ')} onClick={this.handleDelete}>
          {'Delete Account'}
        </a>
      </div>
    );
  }
}

export default MembershipView;
