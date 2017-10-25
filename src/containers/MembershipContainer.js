import React, { Component } from 'react';
import { containers } from 'config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'state/actions';
import Container from 'components/Container';
import MembershipView from 'views/MembershipView';

class MembershipContainer extends Component {

  componentDidMount = () => {
    const { actions, angel, seed, wallet } = this.props;
    !wallet && actions.fetchWallet();
    !angel && actions.fetchAngel();
    !seed && actions.fetchSeed();
  }

  render = () => {
    return (
      <Container title={containers.Membership.title}>
        <MembershipView {...this.props} />
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

export { MembershipContainer };
export default connect(mapStateToProps, mapDispatchToProps)(MembershipContainer);
