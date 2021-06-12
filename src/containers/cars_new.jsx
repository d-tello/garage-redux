import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { createCar } from "../actions";

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push("/"); // Navigate after submit
      return car;
    });
  };
  renderField(field) {
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
      </div>
    );
  }
  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field
          label="Brand"
          name="brand"
          type="text"
          component={this.renderField}
        />
        <label htmlFor="model">Model</label>
        <Field label="Model" name="model" component="input" type="text" />
        <label htmlFor="owner">Owner</label>
        <Field label="Owner" name="owner" component="input" type="text" />
        <label htmlFor="plate">Plate</label>
        <Field label="Plate" name="plate" component="input" type="text" />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}
        >
          Create Car
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return { garage: state.garage };
}
export default reduxForm({ form: "newCarForm" })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
