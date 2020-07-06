import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert } = this.props;

    if (error !== prevProps.error) {
      if (error.msg) {
        for (const field of Object.keys(error.msg)) {
          alert.error(`${field}: ${error.msg[field].join()}`);
        }
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errorReducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
