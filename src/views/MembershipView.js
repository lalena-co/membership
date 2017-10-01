import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Text from 'components/Text';
import Seed from 'components/Seed';
import CreateSeed from 'components/CreateSeed';
import Wallet from 'components/Wallet';
import v from 'vudu';
import { breakpoints } from 'stylesheet';

const localClasses = v({
  membershipView: {
    textAlign: 'center',
    padding: '25px',
    [breakpoints.desktop]: {
      padding: '50px',
    },
  },
  title: {
    marginBottom: '50px',
  },
  description: {
    'p': {
      marginBottom: '25px',
    },
  },
});

class MembershipView extends Component {

  handleDelete = () => this.props.actions.deleteUser();

  render = () => {
    const { actions, user, seed, wallet } = this.props;

    return (
      <div className={localClasses.membershipView}>
        <div className={localClasses.title}><Text variant={'h3'}>{'Membership'}</Text></div>
        <NavLink to={'/edit'}>{'Edit'}</NavLink>
        <div>
          <Text>{'Email'}</Text>
          <Text>{user.email}</Text>
          <Text>{'Verified'}</Text>
          <Text>{user.emailVerified ? 'verified' : 'unverfied'}</Text>
          {!user.emailVerified && (
            <a onClick={actions.verifyUser}>{'Verify Email'}</a>
          )}
        </div>
        <Wallet {...wallet} />
        {wallet && wallet.ethWalletId && (
          seed ? <Seed {...seed} /> : <CreateSeed handleCreate={actions.createSeed} />
        )}
        <a onClick={() => actions.resetPassword(user.email)}>{'Reset Password'}</a>
        <a onClick={this.handleDelete}>{'Delete Account'}</a>
      </div>
    );
  }
}

export default MembershipView;
