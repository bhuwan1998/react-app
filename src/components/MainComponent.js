import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetial'
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component{

  constructor(props){
    super(props);
    
    this.state = {
      dishes: DISHES,
    };
  }


  // only track dishid not the entire dish 
  render(){
    
    const HomePage = () => {
      return(
        <Home />
      );
    }

    return(
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path ="/menu" component={() => <Menu dishes={this.state.dishes} />}/>
            <Redirect to="/home" />
          </Switch> 
        <Footer />
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