import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

// API Endpoint = 'http://api.icndb.com/jokes/random?firstName=John&lastName=Doe'

class ChuckNorris extends Component {
  state = {
    joke: null,
    firstName: null,
    lastName: null,
  };

  componentDidMount(): void {
    // this.getNewJoke();
  }


  getNewJoke = () => {

  };

  render() {
    const { joke } = this.state;

    return (
      <Fragment>
        <div>
          {JSON.stringify(joke)}
        </div>
        <div>
          <span>firstName - </span>
          <input name="firstName" />
          <span>lastName - </span>
          <input name="lastName" />
        </div>
        <button onClick={this.getNewJoke}>Get New Joke</button>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorris);
