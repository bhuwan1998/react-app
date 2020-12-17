import React, {Component} from 'react';
import {Navbar, NavbarBrand} from 'reactstrap'; // importing first component from react strap 
import Menu from './MenuComponent';
import DishDetail from './DishDetial'
import { DISHES } from '../shared/dishes';

class Main extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };

  }

  onDishSelect(dishId){
    this.setState({selectedDish: dishId});
  }
  // only track dishid not the entire dish 
  render(){
    return(
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/"> Ristorante Con Fusion </NavbarBrand>
          </div>
        </Navbar> 
        <Menu dishes={this.state.dishes} 
        onClick={(dishId) => this.onDishSelect(dishId)}/>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]}/>
        
      </div>
    );
    // arrow function helps us check each dish's dishId with selected dish 
    // the filter helps to check through an array of dishes 
    // filter function will give a subarray - elements from the array 
    // dishId matches the selectedDish 
    // filter function will give us a subarray of only one value therefore using [0] - item 0 from the array 
  }
}

export default Main; // exporting this app from app.js