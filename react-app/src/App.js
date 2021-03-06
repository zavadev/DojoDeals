import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import MainPage from './components/MainPage/MainPage';
import ProductDetails from './components/ProductDetails/ProductDetails';
import CartMain from './components/CartMain/CartMain';
import Checkout from './components/CartMain/Checkout';
import NotFound from './components/NotFound/NotFound';
import SplashPage from './components/SplashPage/SplashPage';
import AboutFooter from './components/AboutFooter/AboutFooter';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <Route path='/' exact={true} >
          <SplashPage />
        </Route>
        <Route path='/main' exact={true} >
          <MainPage />
        </Route>
        <Route path='/products/:productId' exact={true} >
          <ProductDetails />
        </Route>
        <Route path='/cart' exact={true} >
          <CartMain />
        </Route>
        <Route path='/checkout' exact={true} >
          <Checkout />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <AboutFooter />
    </BrowserRouter>
  );
}

export default App;
