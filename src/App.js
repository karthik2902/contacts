import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contacts from './components/contacts/Contacts'
import Header from './components/layout/Header'
import Provider from './context/context'
import AddContact from './components/contacts/addContacts'
import EditContact from './components/contacts/editContact'
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import About from './components/pages/about'
import NotFound from './components/pages/pageNotFound';

class App extends Component {
  render() {
    return (
        <Provider>
            <Router>
          <div className="App">
              <Header name="Contact Manager"/>
              <div className="container">

                  <Switch>
                      <Route exact path="/" component={Contacts}></Route>
                        <Route exact path="/about/:id" component={About}></Route>
                        <Route exact path = "/contact/add" component={AddContact}></Route>
                      <Route exact path = "/contact/edit/:id" component={EditContact}></Route>
                      <Route component={NotFound}></Route>
                  </Switch>
              </div>
            </div>
                </Router>
        </Provider>
    );
  }
}

export default App;
