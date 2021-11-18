import { Component } from 'react/cjs/react.production.min';
// import { Navbar, NavbarBrand} from 'reactstrap'; --moved into HeaderComponent
import Header from './HeaderComponent';
import Home from './HomeComponent';
import About from './AboutComponent';
import Menu from './MenuComponent';
import Contact from './ContactComponent';
import DishDetail from './DishDetailComponent';
import Footer from './FooterComponent';
// import { DISHES } from '../shared/dishes'; --no longer used since switching to Redux
// import { COMMENTS } from '../shared/comments';
// import { LEADERS } from '../shared/leaders';
// import { PROMOTIONS } from '../shared/promotions';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment, fetchComments, fetchDishes, fetchPromos } from '../redux/ActionCreators';
import { actions } from 'react-redux-form';

const mapStateToProps = (state) => ({
    // return { --preffered to use {} instead return
        dishes: state.dishes,
        comments: state.comments,
        promotions: state.promotions,
        leaders: state.leaders
    // }
});

const mapDispatchToProps = (dispatch) => ({
    addComment: (dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment)),
    fetchDishes: () => {dispatch(fetchDishes())},
    fetchComments: () => {dispatch(fetchComments())},
    fetchPromos: () => {dispatch(fetchPromos())},
    resetFeedbackForm: () => {dispatch(actions.reset('feedback'))}
});

class Main extends Component {

    // constructor(props) {
    // super(props);

    // /* Removed since switching to Redux */
    // // this.state = {
    // //         dishes: DISHES,
    // //         comments: COMMENTS,
    // //         leaders: LEADERS,
    // //         promotions: PROMOTIONS
    // //         // selectedDish: null --no longer used since React Route
    // //     };
    // // }

    // /* Removed since React Route is used */
    // // onDishSelect(dishId) {
    // //     this.setState({ selectedDish: dishId });
    // };

    componentDidMount() {
        this.props.fetchDishes();
        this.props.fetchComments();
        this.props.fetchPromos();
    }
    
    render() {

        const HomePage = () => {
            return(
                // <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
                //       promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
                //       leader={this.state.leaders.filter((leader) => leader.featured)[0]} />
                // <Home dish={this.props.dishes.filter((dish) => dish.featured)[0]} --since Redux Thunk the state for dishes no longer avaliable via props.dishes
                <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
                      dishesLoading={this.props.dishes.isLoading}
                      dishesErrMess={this.props.dishes.errMess}
                      promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
                      promosLoading={this.props.promotions.isLoading}
                      promosErrMess={this.props.promotions.errMess}
                      leader={this.props.leaders.filter((leader) => leader.featured)[0]} />
            );
        };

        const ContactPage = () => {
            return(
                <Contact resetFeedbackForm={this.props.resetFeedbackForm} />
            );
        }

        const AboutPage = () => {
            return(
                // <About leaders={this.state.leaders} />
                <About leaders={this.props.leaders} />
            );
        };

        const MenuPage = () => {
            return(
                // <Menu dishes={this.state.dishes} />
                // <Menu dishes={this.props.dishes} />
                <Menu dishes={this.props.dishes.dishes}
                      isLoading={this.props.dishes.isLoading}
                      errMess={this.props.dishes.errMess} />
            );
        };

        const DishWithId = ({match}) => {
            return(
                // <DishDetail dish={this.state.dishes
                //                  .filter((dish) => 
                //                  dish.id === parseInt(match.params.dishId, 10))[0]}
                //             comments={this.state.comments
                //                  .filter((comment) =>
                //                  comment.dishId === parseInt(match.params.dishId, 10))} 
                // />
                <DishDetail dish={
                                this.props.dishes.dishes
                                .filter((dish) => 
                                dish.id === parseInt(match.params.dishId, 10))[0]}
                            isLoading={this.props.dishes.isLoading}
                            dishesErrMess={this.props.dishes.errMess}
                            comments={
                                this.props.comments.comments
                                .filter((comment) =>
                                comment.dishId === parseInt(match.params.dishId, 10))}
                            commentsErrMess={this.props.comments.errMess}
                            addComment={this.props.addComment}
                />
            );
        };

        return (
            <div className="App">
                {/* <Navbar dark color = "primary">
                    <div className = "container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar> */}
                <Header />
                {/* <div className="container"> */}
                    {/* <Menu dishes={this.state.dishes}
                          onClick={(dishId) => this.onDishSelect(dishId)} /> */}
                    {/* <DishDetail selectedDish={this.state.dishes
                                             .filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}

                    {/* Configuring the Router */}
                    <Switch>
                        <Route path="/home" component={ HomePage } />
                        <Route exact path="/contact" component={ ContactPage } />
                        {/* <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} /> } /> */}
                        <Route exact path="/about" component={ AboutPage } />
                        <Route exact path="/menu" component={ MenuPage } />
                        <Route path='/menu/:dishId' component={DishWithId} />
                        {/* Setting the default path */}
                        <Redirect to="/home" />
                    </Switch>
                {/* </div> */}
                <Footer />
            </div>
        );
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));