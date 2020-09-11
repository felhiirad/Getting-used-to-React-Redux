import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import CounterComp from './component/CounterComp';

function App(props) {
  return (
    <div className="App">
      <CounterComp/>
      
    </div>
  );
}


export default  App;

