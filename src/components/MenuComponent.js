import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        }
    }

    onDishSelect(dish){
      this.setState({selectedDish: dish}); // selected dish on we just clicked 
      // this is how we change the state of selected dish
    }

    renderDish(dish){
      if(dish != null){
        return (
          <Card>
             <CardImg width="100%" src={dish.image} alt={dish.name} />
             <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
             </CardBody>
          </Card>
        )
      }
      else{
        return(
          <div></div> // empty div just shows nothing is rendered 
        )
      }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1">
                <Card onClick={() => this.onDishSelect(dish)}>
                  <CardImg width="100%" src={dish.image} alt={dish.name} />
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>

                </Card> 
              </div>
            );
        });

        return (
          <div className="container">
            <div className="row">
              {menu}
            </div>
            <div className="row">
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;

// import React, {Component} from 'react'; // this allows us to create a React component 



// class Menu extends Component {
//     // constructor for the component 
//     constructor(props) {
//         super(props); // requried whenever you make a class component 

//         this.state = {
//             dishes: [{
//                     id: 0,
//                     name: 'Uthappizza',
//                     image: 'assets/images/uthappizza.png',
//                     category: 'mains',
//                     label: 'Hot',
//                     price: '4.99',
//                     description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'
//                 },
//                 {
//                     id: 1,
//                     name: 'Zucchipakoda',
//                     image: 'assets/images/zucchipakoda.png',
//                     category: 'appetizer',
//                     label: '',
//                     price: '1.99',
//                     description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter accompanied with a sweet-tangy tamarind sauce'
//                 },
//                 {
//                     id: 2,
//                     name: 'Vadonut',
//                     image: 'assets/images/vadonut.png',
//                     category: 'appetizer',
//                     label: 'New',
//                     price: '1.99',
//                     description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
//                 },
//                 {
//                     id: 3,
//                     name: 'ElaiCheese Cake',
//                     image: 'assets/images/elaicheesecake.png',
//                     category: 'dessert',
//                     label: '',
//                     price: '2.99',
//                     description: 'A delectable, semi-sweet New York Style Cheese Cake, with Graham cracker crust and spiced with Indian cardamoms'
//                 }
//             ],
//         };
//     }

// // return some kind of UI (view)
//     render() {
//         const menu = this.state.dishes.map((dish) =>
//         {   //making use of media class to make a view of dishes
//             return (
//                 <div key={dish.id} className="col-12 mt-5">
//                     <Media tag="li">
//                         <Media left middle>
//                             <Media object src={dish.image} alt={dish.name} />
//                         </Media>
//                         <Media body className="ml-5">
//                             <Media heading>
//                                 {dish.name}
//                                 <p> {dish.description}</p>
//                             </Media>
//                         </Media>
//                     </Media>
//                 </div>
//             );
//         }); // map is to iterate over each individual object in the array of js objects (dishes)
        
//         return ( 
//         <div className="container">
//             <div className="row">
//                 <Menu list>
//                     {menu}
//                 </Menu>
//             </div>
//         </div>    

//      );
//     }

// }
// export default Menu; // export it so that it can be used by other js files through an import 