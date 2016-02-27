// main.js
var React = require('react');
var ReactDOM = require('react-dom');
var Main = React.createFactory(require('./react/components/Main.react.jsx'));

ReactDOM.render(
  <Main/>, document.getElementById('example')
);
