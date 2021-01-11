import React, {Component} from 'react';
import Home from './HomeComponent';
import Menu from './MenuComponent';
import DishDetail from './DishDetail'
import Contact from './ContactComponent';
import About from './AboutComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {postComment, fetchDishes, fetchComments, fetchPromos, postFeedback, fetchLeaders} from '../redux/ActionCreaters'; // we need this to add an action JS object which we can then 
// dispatch to the store 
// by calling store dispatch 
import {actions} from 'react-redux-form';
import {TransitionGroup, CSSTransition} from 'react-transition-group'; 



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

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)), 
  fetchDishes: () => {dispatch(fetchDishes())},  // fetch dishes when called and store in Redux store
  resetFeedbackForm: () => { dispatch (actions.reset('feedback'))}, 
  fetchPromos: () => {dispatch(fetchComments())},  // fetch dishes when called and store in Redux store
  fetchComments: () => {dispatch(fetchPromos())},  // fetch dishes when called and store in Redux store
  fetchLeaders: () => {dispatch(fetchLeaders())}, 
  postFeedback: (feedback) => dispatch(postFeedback(feedback))

});

// the state becomes available to the main class through mapStateToProps as the name suggests 
// mapping state through props to the main component here
class Main extends Component{

  constructor(props){
    super(props);
    
    
  }

  componentDidMount() {
    //lifecycle method component will bound will be called or will be executed just after this component gets mounted into the view of my application 
    this.props.fetchDishes();
    this.props.fetchComments(); 
    this.props.fetchPromos();
    this.props.fetchLeaders();

    
  }



  // only track dishid not the entire dish 
  render(){
    
    const HomePage = () => {
      return(
        <Home // dishes.dishes from dishes.js component 
              dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesisLoading = {this.props.dishes.isLoading}
              dishesErrMess = {this.props.dishes.errMess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promoisLoading = {this.props.promotions.isLoading}
              promosErrMess = {this.props.promotions.errMess}
              leader={this.props.leaders.leaders.filter((leader) => leader.featured)[0]}
              leadersLoading = {this.props.leaders.isLoading}
              leadersErrMess={this.props.leaders.errMess}
          />
          );
    }
    // match is the parameter , filter will return an array and 10 is the base of the integer we want from the parse 
    const DishWithId = ({match}) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
        isLoading = {this.props.dishes.isLoading}
        errMess = {this.props.dishes.errMess}
        comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}        
        commentsErrMess = {this.props.comments.errMess}
        postComment = {this.props.postComment}
        />
      );
    }

    return( // exact is helps in matching exact 
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} className="page" timeout={300}>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path ="/menu" component={() => <Menu dishes={this.props.dishes} />}/>
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} postFeedback={this.props.postFeedback}/>
            <Route path="/aboutus" component={() => <About leaders ={this.props.leaders}/>}/>
            <Redirect to="/home" />
          </Switch> 
          </CSSTransition>
          </TransitionGroup>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main)); // exporting this app from app.js
// in order to use the router we need to wrap withRouter
// @TODO: understand withRouter