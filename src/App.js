import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import { Route, Switch } from 'react-router-dom'
import AddMoviePage from './components/AddMoviePage';
import HomePage from './components/HomePage';
import { store } from './store';
import { Provider } from 'react-redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="header">
            <NavBar dark={true} />
          </header>
          <main>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/addmovie' component={AddMoviePage} />
            </Switch>
          </main>
        </div>
      </Provider>
    );
  }
}

export default App;
