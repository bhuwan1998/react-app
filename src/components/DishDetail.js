import React, {Component} from 'react'
import { Card, CardImg, CardBody, CardText, Button, Modal, ModalHeader, ModalBody, Label, 
    Row, Col, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import {LocalForm, Control , Errors} from 'react-redux-form';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';


const DishDetail = (props) => {
    if(props.isLoading) {
        return (
            // conditional rendering 
            <div className="container">
                    <div className="row">
                        <Loading /> 
                    </div>
            </div> 
        );
    }
    else if(props.errMess){
        return (
            // conditional rendering 
            <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4> 
                    </div>
            </div> 
        );
    }
    
    else if(props.dish != null){
        return(
        <div className="container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/home">Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem> <Link to="/menu"> Menu </Link></BreadcrumbItem>
                    <BreadcrumbItem active> {props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3> {props.dish.name} </h3>
                    <hr />
                </div>
            </div>
        <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} 
                addComment={props.addComment} dishId={props.dish.id} />
            </div>
        </div>
        );
    }
    else{
        return(<div></div>);
    }

}


const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length < len);
const minLength = (len) => (val) => val && (val.length >= len);

class CommentForm extends Component{
    constructor(props){
        super(props);

        this.state = {
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });

    }

    handleSubmit(values){
        this.toggleModal();
        this.props.addComment(this.props.dishId, values.rating, values.author, values.comment);

    }

    render() {
        return(
            <div>
                <Button outline onClick={this.toggleModal}>
                    <span className="fa fa-edit fa-lg"></span> Submit Comment
                </Button>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal} > Submit Comment </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label for="rating" md={12}>Rating</Label>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" className="form-control">
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="author" md={12}> Your Name </Label>
                                    <Col md={12}>
                                        <Control.text model=".author" id="author" name="author"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                        }}
                                        />
                                        <Errors className="text-danger" model=".author" show="touched"
                                            messages={{
                                                required: 'Required: ',
                                                minLength: "Must be more than 3 characters",
                                                maxLength: "Must be less than 15 characters"
            
                                            }}
                                            />
                                    </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="feedback" md={12}> Comment </Label>
                                <Col md={12}>
                                    <Control.text model=".comment" id="comment" name="comment"
                                    resize="none"
                                    className="form-control"
                                    validators={{
                                        required
                                    }}
                                    />
                                    <Errors className="text-danger" model="comment" show="touched"
                                    messages={{
                                        required: "Required"
                                    
                                    }}
                                    />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" className="btn btn-primary"> Submit </Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </div>
        )
    }
}



// user defined components always start with capital letter
function RenderDish({dish}){
    return(
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
}

function RenderComments({comments, addComment, dishId}){
    if(comments != null){
        return(
            <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled">
                {comments.map((comment) =>{
                    return(
                        <li key={comment.id}>
                            <p> {comment.comment} </p>
                            <p> --{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
                            </p>
                      
                        </li>
                    );
                })}
            </ul>
            <CommentForm dishId={dishId} addComment={addComment}/>
        </div>
        );
    }
    else{
        return(<div></div>);
    }
   
}




export default DishDetail;




// class DishDetail extends Component {

//     componentDidMount() {
//         console.log('DishDetail Component componentDidMount invoked');
//     }

//     componentDidUpdate(){
//         console.log('DishDetial Component componentDidUpdate invoked')
//     }

    

//     constructor(props){
//         super(props);
//     }


//     renderDish(dish){
//         return(

//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                 <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         );
//     }

  

//     render(){
//         console.log('DishDetail Component componentDidMount render invoked');
//         if(this.props.dish != null)
//             return(
//                 <div className="container">
//                     <div className="row">
//                         {this.renderDish(this.props.dish)}
//                         {this.renderComments(this.props.dish.comments)}
//                     </div>

//                 </div>
//             );
//         else{
//             return(
//                 <div></div>
//             );
//         }
//     } 
        
    

// }








// function RenderDish({dish}) {
//     if(dish != null){
//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <Card>
//                     <CardImg width="100%" src={dish.image} alt={dish.name} />
//                     <CardBody>
//                         <CardTitle>{dish.name}</CardTitle>
//                         <CardText>{dish.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div> 
//         )
//     }
//     else{
//         return(
//             <div></div>
//         )
//     }
// }

// function RenderComments({comment}) {
//     if(comment != null){
//         let list = comment.map((comment) => {
//             return(
                
//                 <li key={comment.id} >
//                     <div>
//                         <p> {comment.comment}</p>
//                         <p> --{comment.author} , 
//                             {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
//                         </p>
//                     </div>
//                 </li>
            

//             )
//         })
        
//         return(
//             <div className="col-12 col-md-5 m-1">
//                 <h4> Comments </h4>
//                 <ul className="list-unstyled">
//                     {list}
//                 </ul>
//             </div>
//         )

//     }
//     else{
//         return (
//             <div></div>
//         )
//     }

// }

// const dishdetail = (props) => {
//     const{dish} = props; 

//     return dish?(
//         <div className="container">
//             <div className="row">
//                 <RenderDish dish={dish} />
//                 <RenderComments comment={dish.comments} />
//             </div>
//         </div>
//     ): (
//         <div></div>
//     )
// }