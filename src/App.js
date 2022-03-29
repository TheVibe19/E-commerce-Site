import React from 'react';
import { Switch,Route,Redirect
 } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Components/Header/h';
import './App.css';

import CheckoutPage from './pages/Checkout/checkout';
import ShopPage from './pages/shop/shop';
import HomePage from './pages/homepage/hompage.component';
import Sign from './pages/homepage/Sign/sign';

import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selector';
import { createStructuredSelector } from 'reselect';


const HatsPage = () => (
  <div>
    <h1>HATS PAGE </h1>
  </div>
);
const ContactPage = () => (
  <div>
    <h1>For any suggestions or feedback:</h1>
      <h1>Contact:vedant.kulkarni222@rediffmail.com
       </h1>
  </div>
);
 
class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
    <div>
      <Header  />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={ShopPage} />
        <Route exact path='/signin' render={()=> this.props.currentUser ? (<Redirect to='/' />)  : (<Sign />)}/>
        <Route exact path='/shop/Hats' component={HatsPage} />
        <Route exact path='/contact' component={ContactPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
      </Switch>
    </div>
  );
}
}
const mapStateToProps = createStructuredSelector({
  currentUser:selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);