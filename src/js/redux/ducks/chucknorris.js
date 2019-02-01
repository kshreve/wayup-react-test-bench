export const initialState = {
  joke: '',
  loading: false,
  error: false,
};

export const GET_NEW_JOKE_REQUEST = 'GET_NEW_JOKE_REQUEST';
export const GET_NEW_JOKE_SUCCESS = 'GET_NEW_JOKE_SUCCESS';
export const GET_NEW_JOKE_FAILURE = 'GET_NEW_JOKE_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
