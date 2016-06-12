import React from 'react';
import * as Redux from 'react-redux';

import TodoList  from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'
import * as actions from 'actions';


export var TodoApp = React.createClass({
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render() {
    return (
      <div>
        <div className="page-options">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <div className="container">
          <div className="title-container"><p className="title">Tasks For Today.</p></div>
            <div className="skinny-container">
              <TodoSearch/>
              <TodoList/>
            </div>
          <AddTodo/>
        </div>
      </div>
    );
  }

});

export default Redux.connect()(TodoApp);
