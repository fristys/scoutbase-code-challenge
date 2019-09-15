import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';

import { Loading } from './components/Loading';

const Home = lazy(() => import('./components/Home')),
  Countries = lazy(() => import('./components/Countries')),
  CountryDetails = lazy(() => import('./components/CountryDetails'));

export function Routes() {
  return (
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countries/:code" component={CountryDetails} />
        <Route path="/countries" component={Countries} />
      </Switch>
    </Suspense>
  );
}
