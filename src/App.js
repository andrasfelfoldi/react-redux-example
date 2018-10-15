import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AddMoviePage from './components/AddMoviePage';
import HomePage from './components/HomePage';
import { store } from './store';
import { Provider } from 'react-redux';
import EditMoviePage from './components/EditMoviePage';

window.store = store;

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <header className="header">
              <NavBar dark={true} />
            </header>
            <main>
              <Switch>
                <Route path='/' exact component={HomePage} />
                <Route path='/addmovie' component={AddMoviePage} />
                <Route path='/editmovie/' component={EditMoviePage} />
              </Switch>
            </main>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
