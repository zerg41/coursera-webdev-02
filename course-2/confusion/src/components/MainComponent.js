import { Component } from 'react/cjs/react.production.min';
// import { Navbar, NavbarBrand} from 'reactstrap'; --moved into HeaderComponent
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { Route, Redirect, Switch } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
    super(props);

    this.state = {
            dishes: DISHES,
            // selectedDish: null
        };
    }

    /* Removed since React Route is used */
    // onDishSelect(dishId) {
    //     this.setState({ selectedDish: dishId });
    // }

    render() {

        const HomePage = () => {
            return(
                <Home />
            );
        }

        return (
            <div className="App">
                {/* <Navbar dark color = "primary">
                    <div className = "container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar> */}
                <Header />
                <div className="container">
                    {/* <Menu dishes={this.state.dishes}
                          onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                    {/* <DishDetail selectedDish={this.state.dishes
                                             .filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}
                                             
                    {/* Configuring the Router */}
                    <Switch>
                        {/* To routing without passing props */}
                        <Route path="/home" component={ HomePage } />
                        {/* To routing with passing props */}
                        <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } />
                        {/* Setting the default path */}
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;