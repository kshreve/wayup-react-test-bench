import React from 'react';

import reducer, { initialState } from '../../../src/js/redux/ducks/chucknorris';


describe('chuck norris', () => {
  it('should be equal initial state', () => {
    const actual = reducer(undefined, {});
    expect(initialState)
      .toEqual(actual);
  });

});
