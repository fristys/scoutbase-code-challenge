import React from 'react';

import {
  // Use HashRouter for GH pages deployment
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch
} from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { Home } from './components/Home';
import { Countries } from './components/Countries';
import { CountryDetails } from './components/CountryDetails';

import './App.scss';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com'
});

function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
        <div className="App">
          <nav>
            <ul>
              <li>
                <NavLink exact to="/" activeClassName="active">
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink exact to="/countries" activeClassName="active">
                  Countries list
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/countries/:code" component={CountryDetails} />
          <Route path="/countries" component={Countries} />
        </Switch>
      </ApolloProvider>
    </Router>
  );
}

export default App;
