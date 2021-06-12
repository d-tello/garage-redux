/* eslint-disable arrow-parens */
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCar } from "../actions";

class CarsShow extends Component {
  componentDidMount() {
    if (!this.props.car) {
      this.props.fetchCar(this.props.match.params.id);
    }
  }
  render() {
    if (!this.props.car) {
      return <p>Loading...</p>;
    }
    return (
      <div className="show-container">
        <div className="show-image" />
        <div className="show-content">
          <p>
            <strong>Brand: </strong> {this.props.car.brand}
          </p>
          <p>
            <strong>Model: </strong> {this.props.car.model}
          </p>
          <p>
            <strong>Owner: </strong> {this.props.car.owner}
          </p>
          <p>
            <strong>Plate number: </strong>
            {this.props.car.plate}
          </p>
        </div>
        <Link to="/" className="btn btn-show">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  const idFromUrl = parseInt(ownProps.match.params.id, 10); // From URL
  const car = state.cars.find((p) => p.id === idFromUrl);
  return { car };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCar }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsShow);
