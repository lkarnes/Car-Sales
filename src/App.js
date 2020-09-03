import React, {useState, useReducer} from 'react';
import {connect} from 'react-redux';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import {featuresReducer} from './reducers/featuresReducer';

const App = props => {
const [state, dispatch] = useReducer(featuresReducer)
  const removeFeature = item => {
    // dispatch an action here to remove an item
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
  };

  return (
  
    <div className="boxes">
        <div className="box">
          <Header/>
          <AddedFeatures/>
        </div>
        <div className="box">
          <AdditionalFeatures/>
          <Total/> 
        </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    state: state
  }
};
  
  export default connect(mapStateToProps, {})(App)
  
