import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { bindActionCreators } from "redux";
import { fetchCars } from "../actions/index";

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }
  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id} className="car-tile-link">
          <div className="car-tile">
            <h3>{car.brand}</h3>
            <p>{car.model}</p>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <div className="index-container">
        <div className="index-info">
          <div className="index-info-image" />
          <h3>{this.props.garage}</h3>
          <Link to="/cars/new" className="btn">
            Add a new car
          </Link>
        </div>
        <div className="cars-list">{this.renderCars()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars, garage: state.garage };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
