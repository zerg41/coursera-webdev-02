import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, Label, Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false            
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log("New comment: " + JSON.stringify(values));
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment );
        this.toggleModal();

    }

    render() {
        return(
            <div>
                <Button onClick={this.toggleModal} outline className="py-1">
                    <span className="fa fa-pencil"> Leave Comment</span>
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>
                        New Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="rating" md={12}>Rating</Label>
                                <Col>
                                    <Control.select model=".rating" id="rating" name="rating"
                                                    className="form-control" defaultValue="5">
                                        <option value="5" selected>5</option>
                                        <option value="4">4</option>
                                        <option value="3">3</option>
                                        <option value="2">2</option>
                                        <option value="1">1</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}>Your Name</Label>
                                <Col>
                                    <Control.text model=".author" id="author" name="author"
                                                  placeholder="Enter your name" className="form-control"
                                                  validators={{
                                                    required,
                                                    minLength: minLength(3),
                                                    maxLength: maxLength(15)
                                                    }} 
                                    />
                                    <Errors className="text-danger" model=".author" show="touched"
                                            messages={{
                                                required: 'Required! ',
                                                minLength: 'Must be greater than 2 characters',
                                                maxLength: 'Must be less than 15 characters'
                                            }} 
                                    />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="commentText" md={12}>Comment</Label>
                                <Col>
                                    <Control.textarea model=".comment" id="commentText" name="comment" 
                                                      rows="6" className="form-control"
                                                      placeholder="In my opinion..." />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col>
                                    <Button type="submit" color="primary">
                                        Add Comment
                                    </Button>
                                </Col>
                            </Row>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
};

export default CommentForm;