import React from 'react';
import * as Redux from 'react-redux';

import * as actions from 'actions';

export var Login = React.createClass({
  onLogin() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  render() {
    return (
      <div>
        <div className="container login">
          <div className="title-container"><p className="title">React Todo</p></div>
          <div className="skinny-container">
            <h3>Login To Your Account</h3>
            <button onClick={this.onLogin} className="button">Login With Github</button>
          </div>
        </div>
      </div>
    );
  }
});

export default Redux.connect()(Login);
