import React, { Component } from 'react';
import { Switch, Redirect, Route } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as actions from 'state/actions';

import Loading from 'components/Loading';
import Header from 'components/Header';
import Footer from 'components/Footer';

// containers
import { containers } from 'config';
import EditContainer from 'containers/EditContainer';
import LoginContainer from 'containers/LoginContainer';
import MembershipContainer from 'containers/MembershipContainer';
import SignUpContainer from 'containers/SignUpContainer';

const {
  Edit,
  Login,
  Membership,
  SignUp,
} = containers;

class App extends Component {
  componentWillMount = () => {
    const {
      authorizeApplication,
      initializeDatabase,
    } = this.props.actions;
    authorizeApplication();
    initializeDatabase();
  }

  currentUser = () => {
    const { user } = this.props;
    return user && user.uid;
  }

  renderRoutes = (location) => {
    const currentUser = this.currentUser();
    return (
      <Switch
        key={location.pathname}
        location={location}
      >
        <Route
          exact
          path={currentUser ? Membership.path : Login.path}
          component={currentUser ? MembershipContainer : LoginContainer}
        />
        {!currentUser ? (
          <Route
            exact
            path={SignUp.path}
            component={SignUpContainer}
          />
        ) : (
          <Redirect
            from={SignUp.path}
            to={Membership.path}
          />
        )}
        {currentUser ? (
          <Route
            exact
            path={Edit.path}
            component={EditContainer}
          />
        ) : (
          <Redirect
            from={Edit.path}
            to={Login.path}
          />
        )}
      </Switch>
    );
  }

  renderLoading = () => {
    return <Loading />;
  }

  render = () => {
    const { actions, auth, router: { location } } = this.props;
    const currentUser = this.currentUser();

    return (
      <div>
        <Header />
        {currentUser && (
          <a onClick={actions.signOutUser}>{'Sign Out'}</a>
        )}
        { auth ? this.renderRoutes(location) : this.renderLoading()}
        <Footer />
      </div>
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

export { App };
export default connect(mapStateToProps, mapDispatchToProps)(App);
