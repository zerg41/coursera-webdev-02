import { Component } from 'react/cjs/react.production.min';
// import { Navbar, NavbarBrand} from 'reactstrap'; --moved into HeaderComponent
import Header from './HeaderComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';

class Main extends Component {

    constructor(props) {
    super(props);

    this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId) {
        this.setState({ selectedDish: dishId });
    }

    render() {
        return (
            <div className="App">
                {/* <Navbar dark color = "primary">
                    <div className = "container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar> */}
                <Header />
                <div className="container">
                    <Menu dishes={this.state.dishes}
                          onClick={(dishId) => this.onDishSelect(dishId)} />
                    <DishDetail selectedDish={this.state.dishes
                                             .filter((dish) => dish.id === this.state.selectedDish)[0]} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Main;