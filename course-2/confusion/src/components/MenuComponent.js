import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl'; // connect to a server

// function RenderMenuItem(props) --props as a parameter using when we don't know what we want to recieve

    // function RenderMenuItem({ dish, onClick }) {
    function RenderMenuItem({ dish }) {
        return(
            // <Card onClick={() => onClick(dish.id)}> --no longer avaliable since onClick not passed by MainComponent
            <Link to={`/menu/${dish.id}`} > {/* --only `` backward quotes allows (~ w/o shift)*/}
                <Card>
                    {/* <CardImg width="100%" src={dish.image} alt={dish.name} /> --fetch image directly from a server that accept any changes in images*/}
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardImgOverlay>
                        <CardTitle>{dish.name}</CardTitle>
                    </CardImgOverlay>
                </Card>
            </Link>

        );
    }

    /* Another way to implementing functional component */
    const Menu = (props) => {
        
        const menu = props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    {/* <RenderMenuItem dish={dish} onClick={props.onClick} /> */}
                    <RenderMenuItem dish={dish} />
                </div>
            );
        });

        if(props.isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }
        else {
            return (
                <main className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem active>Menu</BreadcrumbItem>
                            </Breadcrumb>
                            <h3>Menu</h3>
                            <hr />
                        </div>
                        {menu}
                    </div>
                </main>
            );
        }
    };


export default Menu;