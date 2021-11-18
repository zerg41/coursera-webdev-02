import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';


    function RenderDish({dish}) {
        return (
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    };

    function RenderComments({comments, addComment, dishId}) {

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
                <CommentForm dishId={dishId} addComment={addComment} />
            </div>
        );
    };

    const DishDetail = (props) => {

        const selectedDish = props.dish;
        const comments = props.comments;
        const addCommentFunc = props.addComment;
        // const selectedDishId = props.dish.id; --using this way will occur an error
        const isLoading = props.isLoading;
        const errorMessage = props.dishesErrMess;
        const commentsErrMess = props.commentsErrMess;

        if (isLoading) {
            return(
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if (errorMessage) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{errorMessage}</h4>
                    </div>
                </div>
            );
        }
        else if (selectedDish != null) {
            return(
                <main className="container">
                    <div className="row">
                        <div className="col-12">
                            <Breadcrumb>
                                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                                <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                                <BreadcrumbItem active>{selectedDish.name}</BreadcrumbItem>
                            </Breadcrumb>
                            <h3>{selectedDish.name}</h3>
                            <hr />
                        </div>
                        <RenderDish dish={selectedDish} />
                        <RenderComments comments={comments} 
                                        addComment={addCommentFunc}
                                        dishId={props.dish.id} />
                    </div>
                </main>
            );
        }
        else {
            return(
                <main className="container"></main>
            );
        }
    };


export default DishDetail;