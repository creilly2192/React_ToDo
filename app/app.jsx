var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hasHistory} = require('react-router');
var Main = require('Main');
var Timer = require('Timer');
var Countdown = require('Countdown');


//load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

//app css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Router history={hasHistory}>
    <Route path="/" component={Main}>
      <Route path="Countdown" component={Countdown}/>
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
