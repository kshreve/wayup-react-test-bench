import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

const Root = ({ store, routes }) => (
  <Provider store={store}>
    <Router>
      {routes}
    </Router>
  </Provider>
);
Root.displayName = 'Root';
Root.propTypes = {
  routes: PropTypes.element.isRequired,
  store: PropTypes.object.isRequired,
};

export default Root;
