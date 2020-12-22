import React from 'react'
import {Card, CardImg, CardBody, CardTitle, CardText, Breadcrumb, BreadcrumbItem} from 'reactstrap'
import { Link } from 'react-router-dom';




// user defined components always start with capital letter
function RenderDish({dish}){
    return(
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg width="100%" src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
                </Card>
        </div> 
    );
}

function RenderComments({comments}){
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
        </div>
        );
    }
    else{
        return(<div></div>);
    }
   
}

const DishDetail = (props) => {
    
    if(props.dish != null){
        return(
        <div className="container">
              <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem> <Link to="/home">Home</Link> </BreadcrumbItem>
                    <BreadcrumbItem> <Link to="/menu"> Menu </Link></BreadcrumbItem>
                    <BreadcrumbItem active> Menu Item </BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3> Menu </h3>
                    <hr />
                </div>
            </div>
        <div className="row">
                <RenderDish dish={props.dish} />
                <RenderComments comments={props.comments} />
            </div>
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