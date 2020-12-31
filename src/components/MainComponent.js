import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetial'
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';



// state obtained here is the state from the redux store 
const mapStateToProps = state => {
  return { // derived from redux 
    // not connected to redux store unless we wrap it Main inside a connect 
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions, 
    leaders: state.leaders
  }   
}

// the state becomes available to the main class through mapStateToProps as the name suggests 
// mapping state through props to the main component here
class Main extends Component{

  constructor(props){
    super(props);
    
    
  }




  // only track dishid not the entire dish 
  render(){
    
    const HomePage = () => {
      return(
        <Home 
              dish={this.props.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
          />
          );
    }
    // match is the parameter , filter will return an array and 10 is the base of the integer we want from the parse 
    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
        
        />
      );
    }

    return( // exact is helps in matching exact 
      <div>
        <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path ="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Route path="/aboutus" component={() => <About leaders ={this.props.leaders}/>}/>
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

export default withRouter(connect(mapStateToProps)(Main)); // exporting this app from app.js
// in order to use the router we need to wrap withRouter
// @TODO: understand withRouter