import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import { Link } from "react-router-dom";
import { createCar } from "../actions";

class CarsNew extends Component {
  onSubmit = (values) => {
    this.props.createCar(this.props.garage, values, (car) => {
      this.props.history.push("/"); // Navigate after submit
      return car;
    });
  };
  renderField = (field) => {
    return (
      <div className="form-input">
        <label htmlFor={field.name}>{field.label}</label>
        <input type={field.type} {...field.input} />
        {field.meta.touched && field.meta.error && (
          <span className="error">{field.meta.error}</span>
        )}
      </div>
    );
  };
  render() {
    return (
      <div className="form-container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="form-new-car"
        >
          <Field
            label="Brand"
            name="brand"
            type="text"
            component={this.renderField}
          />
          <Field
            label="Model"
            name="model"
            component={this.renderField}
            type="text"
          />
          <Field
            label="Owner"
            name="owner"
            component={this.renderField}
            type="text"
          />
          <Field
            label="Plate"
            name="plate"
            component={this.renderField}
            type="text"
          />
          <button
            type="submit"
            disabled={this.props.pristine || this.props.submitting}
            className="btn"
          >
            Create Car
          </button>
        </form>
        <Link to="/" className="btn btn-extra">
          Back
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { garage: state.garage };
}
export default reduxForm({ form: "newCarForm" })(
  connect(mapStateToProps, { createCar })(CarsNew)
);
