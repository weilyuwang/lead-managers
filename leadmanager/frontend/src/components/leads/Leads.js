import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getLeads } from "../../actions/leads";

export class Leads extends Component {
  static propTypes = {
    leads: PropTypes.array.isRequired,
  };

  componentDidMount() {
    // getLeads() calls backend api to fetch all leads and dispatch GET_LEADS action
    this.props.getLeads();
  }

  render() {
    return (
      <div>
        <h1>Lead List</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  leads: state.leadReducer.leads,
});

export default connect(mapStateToProps, { getLeads })(Leads);
