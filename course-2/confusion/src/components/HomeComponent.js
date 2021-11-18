import React from "react";
import { Card, CardBody, CardImg, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { baseUrl } from "../shared/baseUrl";
import { Loading } from "./LoadingComponent";

function RenderCard({item, isLoading, errMess}) {
    if (isLoading) {
        return(
            <Loading />
        );
    }
    else if (errMess) {
        return(
            <h4>{errMess}</h4>
        );
    }
    else {
        return(
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>
    
        );
    }
}

function Home(props) {
    return(
        <main className="container">
            {/* <h4>Home</h4> */}
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.dish} 
                                isLoading={props.dishesLoading} 
                                errMess={props.dishesErrMes} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.promotion}
                                isLoading={props.promosLoading} 
                                errMess={props.promosErrMess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderCard item={props.leader} />
                </div>
            </div>
        </main>
    );
}

export default Home;