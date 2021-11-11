import { Component } from 'react/cjs/react.production.min';
// import { Navbar, NavbarBrand} from 'reactstrap'; --moved into HeaderComponent
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { Route, Redirect, Switch } from 'react-router-dom';

class Main extends Component {

    constructor(props) {
    super(props);

    this.state = {
            dishes: DISHES,
            comments: COMMENTS,
            leaders: LEADERS,
            promotions: PROMOTIONS
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
                <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                      promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                      leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
            );
        }

        // const ContactPage = () => {
        //     return(
        //         <Contact />
        //     );
        // }

        const MenuPage = () => {
            return(
                <Menu dishes={this.state.dishes} />
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
                        <Route exact path="/contact" component={ Contact } />
                        {/* To routing with passing props */}
                        {/* <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } /> */}
                        <Route exact path="/menu" component={ MenuPage } />
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