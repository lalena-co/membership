import React, { Component } from 'react';
import Text from 'components/Text';
import Description from 'components/Description';
import Ticket from 'components/emojis/Ticket';
import v from 'vudu';
import { styles as s, breakpoints } from 'stylesheet';

const localClasses = v({
  loginView: {
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
    marginBottom: '20px',
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
  smallWarningLink: {
    '@composes': [
      s.smallWarningLink,
    ],
    marginTop: '5px',
  },
  signUp: {
    '@composes': [
      s.navLink,
    ],
  }
});

class LoginView extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.actions.authorizeUser(email, password);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render = () => {
    const { email, password } = this.state;
    const { actions, user } = this.props;

    return (
      <div className={localClasses.loginView}>
        <div className={localClasses.header}>
          <Ticket />
          <Text variant={'h3'}>{'Login'}</Text>
        </div>
        <Description />
        <form className={localClasses.form} onSubmit={this.handleSubmit}>
          {user && user.code && (
            <Text>{user.message}</Text>
          )}
          <label className={localClasses.label} htmlFor={'email'}>{'Email'}</label>
          <input
            className={localClasses.input}
            name={'email'}
            type={'email'}
            placeholder={'you@domain.com'}
            value={email}
            onChange={this.handleChange}
          />
          <label className={localClasses.label} htmlFor={'password'}>{'Password'}</label>
          <input
            className={localClasses.input}
            name={'password'}
            type={'password'}
            placeholder={'password'}
            value={password}
            onChange={this.handleChange}
          />
          <button className={localClasses.button} disabled={!email.length} type={'submit'}>
            {'Sign In'}
          </button>
          {email.length > 0 && (
            <a className={localClasses.smallWarningLink} onClick={() => actions.resetPassword(email)}>{'Reset Password'}</a>
          )}
        </form>
      </div>
    );
  }
}

export default LoginView;
