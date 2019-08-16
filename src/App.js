import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './store/store';
import Characters from './containers/Characters/Characters';
import Episodes from "./containers/Episodes/Episodes";
import Login from './containers/Login/Login'

function App() {
  const token = localStorage.getItem('token')

  return (
    <Provider store={store}>
      {!token ? 
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Login}/> :
          <Redirect to={'/'}/>
        </Switch>
      </Router>
    :
      <Router>
        <Switch>
          <Route exact={true} path='/' component={Login}/>
          <Route exact={true} path='/characters' component={Characters}/>
          <Route exact={true} path='/episodes' component={Episodes}/>
          <Redirect to={'/characters'}/>
        </Switch>
      </Router>
    }

    </Provider>
  );
}

export default App;
