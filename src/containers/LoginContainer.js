import React, { Component } from 'react';
import { containers } from 'config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'state/actions';
import Container from 'components/Container';
import LoginView from 'views/LoginView';

class LoginContainer extends Component {
  render = () => {
    return (
      <Container title={containers.Login.title}>
        <LoginView {...this.props} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return { ...state };
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(
      {
        ...actions,
      },
      dispatch,
    ),
  };
}

export { LoginContainer };
export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
