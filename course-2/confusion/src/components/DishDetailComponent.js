import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    function RenderComments({dish}) {

        const comments = dish.comments;

        if (comments != null) {

            const commentsList = comments.map((comment) => {

                return (
                    <div key={comment.id} className="">
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>--{comment.author}, {new Intl
                                                    .DateTimeFormat(
                                                        'en-US',
                                                        {year: 'numeric', month: 'short', day: '2-digit'})
                                                        .format(new Date(Date.parse(comment.date)))}</li>
                        </ul>
                    </div>
                );
            });
    
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {commentsList}
                </div>
            );
        }
        else {

            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <p>There is no comments yet :(</p>
                </div>
            );
        }
    }

    const DishDetail = (props) => {

        const selectedDish = props.selectedDish;

        if (selectedDish != null) {
            return(
                <div className="row">
                    <RenderDish dish={selectedDish} />
                    <RenderComments dish={selectedDish} />
                </div>

            );
        }
        else {
            return(
                <div className="row"></div>
            );
        }
    }


export default DishDetail;