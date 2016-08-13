'use strict';
require('./main.css');
const React = require('react');
const ReactDOM = require('react-dom');

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initialCount};
    this.tick = this.tick.bind(this);
  }
  tick() {
    this.setState({count: this.state.count + 1});
  }
  render() {
    return (
      <div onClick={this.tick}>
        Clicks: {this.state.count}
      </div>
    );
  }
}

Counter.propTypes = { initialCount: React.PropTypes.number };
Counter.defaultProps = { initialCount: 8 };
ReactDOM.render(<Counter /> , document.querySelector('body'));
