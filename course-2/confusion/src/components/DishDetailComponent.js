import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    renderDish(dish) {
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

    renderComments(dish) {        
        if (dish.comments != null) {
            const commentsList = dish.comments.map((comment) => {
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

    render() {

        const selectedDish = this.props.selectedDish;

        if (selectedDish != null) {
            return(
                <div className="row">
                    {this.renderDish(selectedDish)}
                    {this.renderComments(selectedDish)}
                </div>

            );
        }
        else {
            return(
                <div></div>
            );
        }
    }
}

export default DishDetail;