import React from 'react';

// Use HashRouter for GH pages deployment
import { BrowserRouter as Router, NavLink } from 'react-router-dom';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import { Routes } from './Routes';

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

        <Routes />
      </ApolloProvider>
    </Router>
  );
}

export default App;
