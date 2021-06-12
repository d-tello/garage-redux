import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class CarsIndex extends Component {
  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <Link to={`/cars/${car.id}`} key={car.id}>
          <div>
            <h3>{car.brand}</h3>
            <p>{car.model}</p>
          </div>
        </Link>
      );
    });
  }
  render() {
    return (
      <div>
        <div>
          <h3>Garage</h3>
        </div>
        {this.renderCars()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { cars: state.cars };
}
export default connect(mapStateToProps)(CarsIndex);
