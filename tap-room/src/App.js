import React from 'react';
import KegHeader from './KebHeader/KegHeader';
import KegDetails from './KegDetails/KegDetails';
import MainKeg from './MainKegs/MainKeg';
import './App.css';

class App extends React.Component {

constructor(props) {
  super(props);
  this.state = {
    showHomePage: true,
    kegList: [
      {
        name: "",
        brand: "",
        price: "",
        alcoholPercent: "",
        inventory: 124,
        id: ""
      },
      
    ]
  }
}








}

export default App;
