import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Events from './pages/Events';
import Jobs from './pages/Jobs';
import Chat from './pages/Chat';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto">
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/profile" component={Profile} />
          <Route path="/events" component={Events} />
          <Route path="/jobs" component={Jobs} />
          <Route path="/chat" component={Chat} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;