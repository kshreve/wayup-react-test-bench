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
    case GET_NEW_JOKE_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: false,
      });
    case GET_NEW_JOKE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        error: false,
        joke: action.joke,
      });
    case GET_NEW_JOKE_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: true,
      });
    default:
      return state;
  }
};

const getNewJokeRequest = () => ({
  type: GET_NEW_JOKE_REQUEST,
});

export const getNewJokeSuccess = (joke) => ({
  type: GET_NEW_JOKE_SUCCESS,
  joke,
});

export const getNewJokeFailure = (error) => ({
  type: GET_NEW_JOKE_FAILURE,
  error,
});

export const getNewJoke = (firstName, lastName) => (dispatch) => {
  dispatch(getNewJokeRequest());

  return fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
    .then((response) => response.json(),
      (error) => dispatch(getNewJokeFailure(error)))
    .then((json) => {
      return dispatch(getNewJokeSuccess(json.value.joke));
    });
};
