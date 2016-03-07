import React from 'react';
import ReactDOM from 'react-dom';

const h1 = React.createElement(
  'h1',
  null,
  'Hello, plain JS World'
);

ReactDOM.render(h1, document.getElementById('main'));
