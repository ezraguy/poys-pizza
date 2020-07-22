import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/main';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Cart from './components/cart'

class App extends Component {
  constructor(props) {
    super(props)
    Aos.init();
  }
  state = {
    isCartOpen: false,

  }

  openCart = () => {
    this.setState({ isCartOpen: !this.state.isCartOpen })
  }


  render() {
    return (
      <div className="App" >
        {/* <Overlay /> */}
        <Cart isopen={this.state.isCartOpen} />
        <Header openCart={this.openCart} />
        <Main />
      </div>
    )
  }


};


export default App;
