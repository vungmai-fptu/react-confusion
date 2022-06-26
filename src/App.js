import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react'
import Menu from './components/MenuComponent';
import Main from './components/MainComponent';
import { DISHES } from './shared/dishes';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Main />
      </div>
    );
  }
}


export default App
