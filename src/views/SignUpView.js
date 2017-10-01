import React, { Component } from 'react';
import Text from 'components/Text';
import Description from 'components/Description';
import WritingHand from 'components/emojis/WritingHand';
import v from 'vudu';
import { styles as s, breakpoints } from 'stylesheet';

const localClasses = v({
  signUpView: {
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

    return (
      <div className={localClasses.signUpView}>
        <div className={localClasses.header}>
          <WritingHand />
          <Text variant={'h3'}>{'Sign Up'}</Text>
        </div>
        <Description />
        <form className={localClasses.form} onSubmit={this.handleSubmit}>
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
          <button className={localClasses.button} type={'submit'}>{'Register'}</button>
        </form>
      </div>
    );
  }
}

export default SignUpView;
