import React, { Component } from 'react';

class HelloWorld extends Component {

  constructor() {
    super();
    this.state = {
      counter: 0,
    };

    this.increment = this.increment.bind(this);
  }


  componentWillMount() {
    console.log('Will Mount');
  }

  componentDidMount() {
    console.log('Did Mount');
  }

  componentWillReceiveProps() {
    console.log('Will Receive Props');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Next Props: ', nextProps);
    console.log('Next State: ', nextState);

    if (nextState.counter % 2 === 0) {
      return true;
    }
    return false;
  }

  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    console.log('Render');
    return (
      <div>
        <p>
          Hello World: {this.state.counter}
        </p>
        <input type="button" onClick={this.increment} defaultValue="Increment" />
      </div>
    );
  }
}

export default HelloWorld;
