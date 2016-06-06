var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var todoText = this.refs.todoText.value;

    if(todoText.length > 0) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function () {
    return (
      <div className="add-todo">
        <form ref="form" onSubmit={this.handleSubmit} className="addtodo-form">
          <input type="text" ref="todoText" placeholder="Enter Task"/>
          <button className="button expanded">Add Task</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
