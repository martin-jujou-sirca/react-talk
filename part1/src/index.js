// rendering examples
// require('./render/non-es6.js');
// require('./render/es6.js');
// require('./render/no-jsx.js');


// render a react component (component lifecycle / props/ state)
import HelloWorld from './components/HelloWorld.js';

const React = require('react');
const ReactDOM = require('react-dom');

ReactDOM.render(
  <HelloWorld />,
  document.getElementById('main')
);
