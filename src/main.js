"use strict";
require('./main.css');
var React = require('react');
var ReactDOM = require('react-dom');

ReactDOM.render(
    React.createElement('h1', null, 'This is easy example!'),
    document.getElementById('example')
);
