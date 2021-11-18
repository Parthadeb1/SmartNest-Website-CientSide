
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Services from './Components/Services/Services';
import SignIn from './Components/SignIn/SignIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/context/AuthProvider';
import AboutUs from './Components/AboutUs/AboutUs';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrder from './Components/MyOrder/MyOrder';
import PrivateRoute from './Components/SignIn/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="container-fluid">
     <AuthProvider>
     <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
          <Home/>
          </Route>
          <Route  path="/home">
            <Home/>
          </Route>
          <PrivateRoute  path="/packages">
            <Services/>
          </PrivateRoute>
          <PrivateRoute  path="/dashboard">
            <Dashboard/>
          </PrivateRoute>
          <PrivateRoute  path="/myorder/:packageId">
            <MyOrder/>
          </PrivateRoute>
          <Route  path="/aboutus">
            <AboutUs/>
          </Route>
          <Route  path="/signin">
            <SignIn/>
          </Route>
          <Route  path="/signup">
            <SignUp/>
          </Route>
          <Route  path="/*">
            <NotFound/>
          </Route>
        </Switch>
      </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
