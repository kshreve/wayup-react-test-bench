import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getNewJoke } from '../../redux/ducks/chucknorris';

// API Endpoint = 'http://api.icndb.com/jokes/random?firstName=John&lastName=Doe'

class ChuckNorris extends Component {
  state = {
    joke: null,
    firstName: null,
    lastName: null,
  };

  componentDidMount(): void {
    // this.getNewJoke();
    this.props.reduxGetNewJoke('kevin', 'shreve');
  }


  getNewJoke = () => {
    const { firstName, lastName } = this.state;

    return fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
      .then((response) => response.json())
      .then((response) => {
        this.setState({
          joke: response.value.joke,
        });
      });
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

const mapStateToProps = (state) => ({
  chucknorris: state.chucknorris,
});

const mapDispatchToProps = (dispatch) => ({
  reduxGetNewJoke: (firstName, lastName) => dispatch(getNewJoke(firstName, lastName)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChuckNorris);
