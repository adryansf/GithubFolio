import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import User from './pages/User';

// Intl
import Intl from './utils/Intl';

export default function Routes() {
  Intl();
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:username" component={User} />
      </Switch>
    </BrowserRouter>
  );
}
