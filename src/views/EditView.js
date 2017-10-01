import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Text from 'components/Text';
import v from 'vudu';
import { breakpoints } from 'stylesheet';

const localClasses = v({
  editView: {
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

class EditView extends Component {

  state = {
    email: this.props.user.email,
    ethWalletId: this.props.wallet ? this.props.wallet.ethWalletId : '',
  }

  handleEmailAction = (e) => {
    e.preventDefault();
    this.props.actions.updateEmail(this.state.email);
  }

  handleWalletAction = (e) => {
    e.preventDefault();
    const { ethWalletId } = this.state;
    this.props.actions.saveWallet({ ethWalletId });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render = () => {
    const { email, ethWalletId } = this.state;
    const { actions, user, wallet } = this.props;
    return (
      <div className={localClasses.editView}>
        <NavLink to='/'>{'Back'}</NavLink>
        <div className={localClasses.title}><Text variant={'h3'}>{'Edit Membership'}</Text></div>
        <form onSubmit={this.handleEmailAction}>
          <label htmlFor={'email'}>{'Email'}</label>
          <input type={'email'} name={'email'} value={email} onChange={this.handleChange} />
          <button disabled={email === user.email} type={'submit'}>{'Update Email'}</button>
        </form>
        <form onSubmit={this.handleWalletAction}>
          <label htmlFor={'ethWalletId'}>{'Ethereum Wallet Address'}</label>
          <input type={'text'} name={'ethWalletId'} value={ethWalletId} onChange={this.handleChange} />
          <button disabled={wallet && (wallet.ethWalletId === ethWalletId)} type={'submit'}>{'Update Wallet Address'}</button>
        </form>
        <a onClick={actions.deleteUser}>{'Delete Account'}</a>
      </div>
    );
  }
}

export default EditView;
