// import logo from './logo.svg'; --no longer used
import { Component } from 'react/cjs/react.production.min';
import { Navbar, NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponent';
// import './App.css'; --no longer used
import { DISHES } from './shared/dishes';

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
        <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
