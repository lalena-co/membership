import React, { Component } from 'react';
import { containers } from 'config';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from 'state/actions';
import Container from 'components/Container';
import EditView from 'views/EditView';

class EditContainer extends Component {

  componentDidMount = () => {
    const { actions, wallet } = this.props;
    !wallet && actions.fetchWallet();
  }

  render = () => {
    return (
      <Container title={containers.Edit.title}>
        <EditView {...this.props} />
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

export { EditContainer };
export default connect(mapStateToProps, mapDispatchToProps)(EditContainer);
