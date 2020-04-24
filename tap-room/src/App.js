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
        name: "I'd Rather Be Smokin Cat Nip Pale Ale",
        brand: "Princess Haru's Brewery",
        image: ""
        price: "$4.20",
        alcoholPercent: "8%",
        inventory: 124,
        id: ""
      },
       {
        name: "Your Dog Sucks Milk Stout",
        brand: "Princess Haru's Brewery",
        image: ""
        price: "$4.20",
        alcoholPercent: "8%",
        inventory: 124,
        id: ""
      },
      //   {
      //   name: "Your Dog Sucks Milk Stout",
      //   brand: "Princess Haru's Brewery",
      //   image: ""
      //   price: "$4.20",
      //   alcoholPercent: "8%",
      //   inventory: 124,
      //   id: ""
      // },

    ]
  }
}








}

export default App;
