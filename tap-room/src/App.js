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
        id: "666"
      },
       {
        name: "Your Dog Sucks Milk Stout",
        brand: "Princess Haru's Brewery",
        image: ""
        price: "$4.20",
        alcoholPercent: "8%",
        inventory: 124,
        id: "667"
      } //you might need to put a comma here if you dont open up that other beer
      //   {
      //   name: "Your Dog Sucks Milk Stout",
      //   brand: "Princess Haru's Brewery",
      //   image: ""
      //   price: "$4.20",
      //   alcoholPercent: "8%",
      //   inventory: 124,
      //   id: ""
      // },

    ],
    currentSelectedKeg: {},
  }
}
handleKegSelection = (id) => {
  const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
  this.setState({
    currentSelectedKeg: selectedKeg,
    showHomePage: False
  })
}

handleAddingNewKeg = (newKeg) => {
  const newKeglist = this.state.kegList.concat(newKeg);
  this.setState({kegList: newKegList})
}

handleBackToAlbums = () => {
  this.setState({
    showHomePage: true
  })
}

handleKegPurchase = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    // const newShoppingCartItems = this.state.shoppingCartItems.concat(selectedAlbum);
    const newInventory = selectedKeg.inventory -1;
    const updatedKeg = {...selectedKeg, inventory: newInventory};
    const oldKegs = this.state.kegList.filter(keg => keg.id !== id);
    this.setState({
      // shoppingCartItems: newShoppingCartItems,
      kegList: [...oldKegs, updatedKeg],
      currentSelectedKeg: updatedKeg
    });
}

  handleKegRestock = (id) => {
    const selectedKeg = this.state.kegList.filter(keg => keg.id === id)[0];
    const newInventory = selectedKeg.inventory +124;
    const updatedKeg = {...selectedKeg, inventory: newInventory}
    const oldKegs = this.state.kegList.filter(keg => keg.id !== id);
    this.setState({
      kegList: [...oldKegs, updatedKeg],
      currentSelectedKeg: updatedKeg
    });
  }







}

export default App;
