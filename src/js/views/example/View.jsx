import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import LazyLoading from '../../common/components/LazyLoading';

require('../../../style/index.scss');

const LazyExample = LazyLoading(() => import('../../common/components/Home/Home'));

class ExampleView extends Component {
    static propTypes = {
      example: PropTypes.object.isRequired,
    };

    render() {
      return (
        <Fragment>
          <LazyExample {...this.props} />
        </Fragment>
      );
    }
}

const mapStateToProps = (state) => ({
  example: state.example,
});

export default connect(mapStateToProps, {})(ExampleView);
