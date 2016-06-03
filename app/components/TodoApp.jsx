var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import TodoList  from 'TodoList'
import AddTodo from 'AddTodo'
import TodoSearch from 'TodoSearch'



var TodoApp = React.createClass({
  render: function () {
    return (
      <div className="container">
        <div className="title-container"><p className="title">Tasks For Today.</p></div>
          <div className="skinny-container">
            <TodoSearch/>
            <TodoList/>
          </div>
        <AddTodo/>
      </div>
    );
  }

});

module.exports = TodoApp;
