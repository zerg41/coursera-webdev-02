import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';


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

    // function RenderComments({dish}) {

    //     const comments = dish.comments;

    //     if (comments != null) {

    //         const commentsList = comments.map((comment) => {

    //             return (
    //                 <div key={comment.id} className="">
    //                     <ul className="list-unstyled">
    //                         <li>{comment.comment}</li>
    //                         <li>--{comment.author}, {new Intl
    //                                                 .DateTimeFormat(
    //                                                     'en-US',
    //                                                     {year: 'numeric', month: 'short', day: '2-digit'})
    //                                                     .format(new Date(Date.parse(comment.date)))}</li>
    //                     </ul>
    //                 </div>
    //             );
    //         });
    
    //         return (
    //             <div className="col-12 col-md-5 m-1">
    //                 <h4>Comments</h4>
    //                 {commentsList}
    //             </div>
    //         );
    //     }
    //     else {

    //         return (
    //             <div className="col-12 col-md-5 m-1">
    //                 <h4>Comments</h4>
    //                 <p>There is no comments yet :(</p>
    //             </div>
    //         );
    //     }
    // }
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
    }

    const DishDetail = (props) => {

        const selectedDish = props.dish;
        const comments = props.comments;
        const addCommentFunc = props.addComment;
        const selectedDishId = props.dish.id;

        if (selectedDish != null) {
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
                        {/* <RenderComments dish={selectedDish} /> */}
                        {/* {comments ? <RenderComments comments={comments} /> : null} */}
                        <RenderComments comments={comments} 
                                        addComment={addCommentFunc}
                                        dishId={selectedDishId} />
                    </div>
                </main>
            );
        }
        else {
            return(
                <main className="container"></main>
            );
        }
    }


export default DishDetail;