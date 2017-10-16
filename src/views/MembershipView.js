import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import ClinkingGlasses from 'components/emojis/ClinkingGlasses';
import WhiteCheckmark from 'components/emojis/WhiteCheckmark';
import Text from 'components/Text';
import Wallet from 'components/Wallet';
import ViewInstructions from 'components/ViewInstructions';
import DistributionEvent from 'components/DistributionEvent';
import v from 'vudu';
import { styles as s, breakpoints } from 'stylesheet';

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
    const { actions, user, wallet } = this.props;

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

        <section className={localClasses.section}>
          <ViewInstructions />
        </section>

        {wallet && wallet.ethWalletId && (<DistributionEvent {...this.props} />)}

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
