// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var TestView = React.createFactory(require('./react/components/test.js'));

ReactDOM.render(
  <TestView/>, document.getElementById('example')
);
