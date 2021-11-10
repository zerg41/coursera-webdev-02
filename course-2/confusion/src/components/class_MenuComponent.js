import React, { Component } from 'react';
// import { Media } from 'reactstrap'; --no longer used
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
// import DishDetail from './DishDetailComponent'; --moved into MainComponent

class Menu extends Component {

    constructor(props) {
        super(props);

        /* State has been moved to MainComponent */
        // this.state = {
        //     selectedDish: null
        //     /* Move dishes array into separate file dishes.js
        //     // dishes: [
        //     //     {
        //     //         id: 0,
        //     //         name:'Uthappizza',
        //     //         image: 'assets/images/uthappizza.png',
        //     //         category: 'mains',
        //     //         label:'Hot',
        //     //         price:'4.99',
        //     //         description:'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'                        },
        //     //     {
        //     //         id: 1,
        //     //         name:'Zucchipakoda',
        //     //         image: 'assets/images/zucchipakoda.png',
        //     //         category: 'appetizer',
        //     //         label:'',
        //     //         price:'1.99',
        //     //         description:'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'                        },
        //     //     {
        //     //         id: 2,
        //     //         name:'Vadonut',
        //     //         image: 'assets/images/vadonut.png',
        //     //         category: 'appetizer',
        //     //         label:'New',
        //     //         price:'1.99',
        //     //         description:'A quintessential ConFusion experience, is it a vada or is it a donut?'                        },
        //     //     {
        //     //         id: 3,
        //     //         name:'ElaiCheese Cake',
        //     //         image: 'assets/images/elaicheesecake.png',
        //     //         category: 'dessert',
        //     //         label:'',
        //     //         price:'2.99',
        //     //         description:'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
        //     //     }
        //     // ],
        //     */
        // }

        /* Lifecycle Test Function 1 */
        console.log('Menu Component constructor is invoked');
    }

    /* Lifecycle Test Function 2 */ 
    componentDidMount() {
        console.log('Menu Component componentDidMount is invoked');
        this.someFunctionInvokation();
    }
    /* Lifecycle Test Function 3 */
    someFunctionInvokation() {
        console.log('someFunction is invoked');
    }

    /** FUNCTIONS **/
    /* onDishSelect function has been moved to MainComponent */
    // onDishSelect(dish) {
    //     this.setState({ selectedDish: dish });
    // }
    /* Functionality has been moved to a separate component (DishDetailComponent)
    // renderDish(dish) {
    //     if (dish != null) {
    //         return(
    //             <Card>
    //                 <CardImg width="100%" src={dish.image} alt={dish.name} />
    //                 <CardBody>
    //                     <CardTitle>{dish.name}</CardTitle>
    //                     <CardText>{dish.description}</CardText>
    //                 </CardBody>
    //             </Card>
    //         )
    //     }
    //     else {
    //         return(
    //             <div></div>
    //         );
    //     }
    // }
    */

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                /* Media-component has been converted to Card-component
                // <div key={dish.id} className="col-12 mt-5">
                //    <Media tag="li">
                //         <Media left middle>
                //             <Media object src={dish.image} alt={dish.name} />
                //         </Media>
                //         <Media body className="ml-5">
                //             <Media heading>{dish.name}</Media>
                //             <p>{dish.description}</p>
                //         </Media>
                //     </Media>
                */
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <Card onClick={() => this.onDishSelect(dish)}> */}
                    <Card onClick={() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });

        /* Lifecycle Test Function 4 */
        console.log('Menu Component render is invoked');

        return (
            // <div className="container">
            //     <div className="row">
            //         {/* <Media list>
            //             {menu}
            //         </Media> */}
            //         {menu}
            //     </div>
            //     {/* <DishDetail selectedDish={this.state.selectedDish} /> */}
            //     {/* <div className="row">
            //         {this.renderDish(this.state.selectedDish)}
            //     </div> */}
            // </div>
            <div className="row">
                {menu}
            </div>
        );
    }
}

export default Menu;