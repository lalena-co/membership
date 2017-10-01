import React, { Component } from 'react';
import { containers } from 'config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'state/actions';
import Container from 'components/Container';
import SignUpView from 'views/SignUpView';

class SignUpContainer extends Component {
  render = () => {
    return (
      <Container title={containers.SignUp.title}>
        <SignUpView {...this.props} />
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

export { SignUpContainer };
export default connect(mapStateToProps, mapDispatchToProps)(SignUpContainer);
