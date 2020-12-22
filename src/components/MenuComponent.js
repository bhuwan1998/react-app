import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import React from 'react';
import { Link } from 'react-router-dom';

function RenderMenuItem({dish, onClick}) {
  // back quotes can be used inside the link
  return(
   <Card>
     <Link to={`/menu/${dish.id}`}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
      </Link>
   </Card>
     
    
  );
}

    // another way of making a functional component 
const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return(
      <div className="col-12 col-md-5 m-1" key={dish.id}>
         <RenderMenuItem dish={dish} />
      </div>
    );
  });

  return (
    <div className="container">
     <div className="row">
        <Breadcrumb>
          <BreadcrumbItem> <Link to="/home">Home</Link> </BreadcrumbItem>
          <BreadcrumbItem active> Menu </BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3> Menu </h3>
          <hr />
        </div>
     </div>
     <div className="row">
      {menu}
     </div>
    </div>
    
    );
  }




export default Menu;

