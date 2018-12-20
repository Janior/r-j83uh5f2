import React, { Component } from 'react';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.counter = this.counter.bind(this);
    this.state = { value: 0 };
  }
  render() {
    return (
      <div className="container">
        <textarea rows="3" id="count" onChange={this.counter} />

        <div className="counter" id="contador">
          {this.state.value}
        </div>
      </div>
    );
  }

  counter(e) {
    this.setState({ value: e.target.value.length});
  }
}

export default App;
