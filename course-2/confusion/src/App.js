// import logo from './logo.svg'; --no longer used
import { Component } from 'react/cjs/react.production.min';
// import DishDetail from './components/DishDetailComponent'; --moved into MainComponent
// import { Navbar, NavbarBrand} from 'reactstrap'; --moved into MainComponent
// import Menu from './components/MenuComponent'; --moved into MainComponent
// import './App.css'; --no longer used
// import { DISHES } from './shared/dishes'; --moved into MainComponent
import Main from './components/MainComponent';

class App extends Component {

  /* Constructor no longer used since the state has been moved to MainComponent */
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     dishes: DISHES
  //   };
  // }

  render() {

    return (
      <div className="App">
        {/* <Navbar dark color = "primary">
          <div className = "container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar> */}
        {/* <Menu dishes={this.state.dishes} /> */}
        <Main />
      </div>
    );
  }
}

export default App;