import React from 'react'
import { Navbar, NavbarBrand } from 'reactstrap';
import { Component } from 'react'
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="danger">
          <div className="container">
            <NavbarBrand href="/" className="font-weight-bold">Restorante confusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
          <Menu dishes={this.state.dishes} />
        </div>

      </div>
    );
  }
}

export default App
