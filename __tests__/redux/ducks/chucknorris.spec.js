import React from 'react';

import reducer, {
  getNewJokeFailure,
  getNewJokeSuccess,
  initialState,
} from '../../../src/js/redux/ducks/chucknorris';


describe('chuck norris', () => {
  it('should be equal initial state', () => {
    const actual = reducer(undefined, {});
    expect(initialState)
      .toEqual(actual);
  });

  it('should handle getNewJokeSuccess', () => {
    const joke = 'hi';
    const expectedState = Object.assign({}, initialState, {
      error: false,
      joke,
    });

    const actual = reducer(undefined, getNewJokeSuccess(joke));

    expect(expectedState)
      .toEqual(actual);
  });

  it('should handle getNewJokeFailure', () => {
    const expectedState = Object.assign({}, initialState, {
      error: true,
    });

    const actual = reducer(undefined, getNewJokeFailure());

    expect(expectedState)
      .toEqual(actual);
  });
});
