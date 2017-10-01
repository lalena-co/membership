import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Text from 'components/Text';
import v from 'vudu';
import { breakpoints } from 'stylesheet';

const localClasses = v({
  signUpView: {
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

class SignUpView extends Component {

  state = {
    email: '',
    password: '',
  }

  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    this.props.actions.registerUser(email, password);
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render = () => {
    const { email, password } = this.state;
    const { user } = this.props;

    return (
      <div className={localClasses.signUpView}>
        <Text variant={'h3'}>{'Sign Up'}</Text>
        <NavLink to='/'>{'Cancel'}</NavLink>
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
          <button type={'submit'}>{'Register'}</button>
        </form>
      </div>
    );
  }
}

export default SignUpView;
