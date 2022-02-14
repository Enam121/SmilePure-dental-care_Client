import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Appointment from './pages/Appoinment page/Appointment/Appointment';
import Home from './pages/Home page/Home/Home';
import './App.css';
import Login from './pages/Login page/Login/Login';
import Register from './pages/Login page/Register/Register';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './pages/Login page/privateRoute/privateRoute';
import Dashboard from './pages/Dashboard Page/Dashboard/Dashboard';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>

            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Home />
            </Route>

            <PrivateRoute path="/appointment">
              < Appointment />
            </PrivateRoute>

            <PrivateRoute path="/dashboard">
              < Dashboard />
            </PrivateRoute>

            <Route path="/login">
              < Login />
            </Route>

            <Route path="/register">
              <Register />
            </Route>

          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
