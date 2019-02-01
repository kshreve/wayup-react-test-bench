import React, { Component, Fragment } from 'react';


class Counter extends Component {
  render() {
    const count = 0;

    return (
      <Fragment>
        <div>
          {count}
        </div>
        <button>Click me!</button>
      </Fragment>
    );
  }
}

export default Counter;
