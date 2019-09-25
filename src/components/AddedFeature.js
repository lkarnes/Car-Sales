import React from 'react';
import {connect} from 'react-redux';
import {removeFeatureAction} from '../actions';

const AddedFeature = props => {

  const removeFeature = () => {
    console.log('in fun',props.feature)
    props.removeFeature(props.feature)
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={removeFeature}>X</button>
      <p>{props.feature.name}</p>
    </li>
  );
};


export default connect(null, {removeFeature: removeFeatureAction})(AddedFeature);
