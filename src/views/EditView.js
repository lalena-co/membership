import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Text from 'components/Text';
import PointLeft from 'components/emojis/PointLeft';
import v from 'vudu';
import { styles as s, breakpoints } from 'stylesheet';

const localClasses = v({
  editView: {
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
  header: {
    marginBottom: '20px',
  },
  form: {
    '@composes': [
      s.flex,
      s.flexColumn,
      s.justifyCenter,
    ],
    marginBottom: '40px',
    width: '85%',
    [breakpoints.desktop]: {
      width: '35%',
    }
  },
  label: {
    '@composes': [
      s.label
    ],
  },
  input: {
    '@composes': [
      s.input
    ],
  },
  button: {
    '@composes': [
      s.button,
    ],
  },
  delete: {
    '@composes': [
      s.smallWarningLink,
    ],
    color: 'red !important',
  },
  link: {
    '@composes': [
      s.navLink,
    ],
  },
  title: {
    marginTop: '20px',
  }
});

class EditView extends Component {

  state = {
    email: this.props.user.email,
    ethWalletId: this.props.wallet ? this.props.wallet.ethWalletId : '',
  }

  handleEmailAction = (e) => {
    e.preventDefault();
    this.props.actions.updateEmail(this.state.email);
    this.props.history.push('/');
  }

  handleWalletAction = (e) => {
    e.preventDefault();
    const { ethWalletId } = this.state;
    this.props.actions.saveWallet({ ethWalletId });
    this.props.history.push('/');
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
        <div className={localClasses.header}>
          <NavLink className={localClasses.link} to='/'>
            <PointLeft />
            <span className={'text'}>{'Go Back'}</span>
          </NavLink>
          <Text classes={localClasses.title} variant={'h3'}>{'Edit Membership'}</Text>
        </div>
        <form className={localClasses.form} onSubmit={this.handleEmailAction}>
          <label className={localClasses.label} htmlFor={'email'}>{'Email'}</label>
          <input className={localClasses.input} type={'email'} name={'email'} value={email} onChange={this.handleChange} />
          <button className={localClasses.button} disabled={email === user.email} type={'submit'}>{'Update Email'}</button>
        </form>
        <form className={localClasses.form} onSubmit={this.handleWalletAction}>
          <label className={localClasses.label} htmlFor={'ethWalletId'}>{'Ethereum Wallet Address'}</label>
          <input className={localClasses.input} type={'text'} name={'ethWalletId'} value={ethWalletId} onChange={this.handleChange} />
          <button className={localClasses.button} disabled={wallet && (wallet.ethWalletId === ethWalletId)} type={'submit'}>{'Update Wallet Address'}</button>
        </form>
        <a className={localClasses.delete} onClick={actions.deleteUser}>{'Delete Account'}</a>
      </div>
    );
  }
}

export default withRouter(EditView);
