import React from 'react';
import {connect} from 'react-redux';
import { fromEventPattern } from 'rxjs';

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.car.price + props.additionalPrice}</h4>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    car: state.car,
    additionalPrice: state.additionalPrice
  }
}

export default connect(mapPropsToState, {})(Total);

