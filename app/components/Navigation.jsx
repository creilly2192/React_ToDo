var React = require('react');
var {Link, IndexLink} = require('react-router');


var Navigation = React.createClass({
  render: function () {
    return (
      <div className="top-bar" data-topbar role="navigation">
        <div className="top-bar-left">
          <ul className="menu">
            <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink></li>
            <li><Link to="Countdown" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Countdown</Link></li>
          </ul>
        </div>
      </div>
    );
  }
});

module.exports = Navigation;
