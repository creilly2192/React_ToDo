var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var actions = require('actions');

export var Todo = React.createClass({
  render: function () {
    var {text, id, completed, createdAt, completedAt, dispatch} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do, YYYY @ h:mm a');
    };

    return (
      <div className={todoClassName} onClick={() => {
        dispatch(actions.toggleTodo(id));
      }}>
          <div>
            <input type="checkbox" checked={completed}/>
          </div>
          <div className="todo-subtext">
            <p>{text}</p>
            <small>{renderDate()}</small>
          </div>
      </div>
    );
  }
});

export default connect()(Todo)
