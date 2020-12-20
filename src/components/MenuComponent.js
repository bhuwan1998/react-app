import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import React from 'react';

    function RenderMenuItem({dish, onClick}){
      return(
        <Card onClick={() => onClick(dish.id)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      );
    }

    // another way of making a functional component 
    const Menu = (props) => {
      const menu = props.dishes.map((dish) => {
        return(
        <div key = {dish.id} className="col-12 col-md-5 m-1">
          <RenderMenuItem dish={dish} onClick = {props.onClick} />
        </div>
        );
      });

      return (
         <div className="container">
          <div className="row">
              {menu}
          </div>
        </div>
      );


    }




export default Menu;

