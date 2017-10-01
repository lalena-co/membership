import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Text from 'components/Text';
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
    padding: '25px',
    [breakpoints.desktop]: {
      padding: '50px',
    },
  },
  form: {
    '@composes': [
      s.flex,
      s.flexColumn,
      s.justifyCenter,
    ],
    width: '25%',
    'label': {
      marginBottom: '5px',
      textAlign: 'left',
    },
    'input': {
      marginBottom: '20px',
    }
  },
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
        <Text variant={'h3'}>{'Login'}</Text>
        <NavLink to={'/sign-up'}>{'Sign Up'}</NavLink>
        <form className={localClasses.form} onSubmit={this.handleSubmit}>
          {user && user.code && (
            <Text>{user.message}</Text>
          )}
          <label htmlFor={'email'}>{'Email'}</label>
          <input
            name={'email'}
            type={'email'}
            placeholder={'you@domain.com'}
            value={email}
            onChange={this.handleChange}
          />
          <label htmlFor={'password'}>{'Password'}</label>
          <input
            name={'password'}
            type={'password'}
            placeholder={'password'}
            value={password}
            onChange={this.handleChange}
          />
          <button disabled={!email.length} type={'submit'}>{'Login'}</button>
        </form>
        {email.length && (
          <a onClick={() => actions.resetPassword(email)}>{'Reset Password'}</a>
        )}
      </div>
    );
  }
}

export default LoginView;
