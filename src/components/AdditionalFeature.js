import React from 'react';
import {connect} from 'react-redux';
import AdditionalFeatures from './AdditionalFeatures';
import { AddFeatureAction } from '../actions';

const AdditionalFeature = props => {
  const addFeature = () => {
      props.addFeature(props.feature)
  }
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={addFeature}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapPropsToState = state => {
  return {
    car: state.car
  }
}

export default connect(mapPropsToState, {addFeature: AddFeatureAction})(AdditionalFeature);


