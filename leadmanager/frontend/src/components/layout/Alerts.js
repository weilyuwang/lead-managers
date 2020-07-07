import React, { Component, Fragment } from "react";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Alerts extends Component {
  static propTypes = {
    error: PropTypes.object.isRequired,
    message: PropTypes.object.isRequired,
  };

  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;

    if (error !== prevProps.error) {
      if (error.msg) {
        for (const field of Object.keys(error.msg)) {
          alert.error(`${field}: ${error.msg[field].join()}`);
        }
      }
    }

    if (message !== prevProps.message) {
      if (message) {
        alert.success(Object.values(message)[0]);
      }
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errorReducer,
  message: state.messageReducer,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
