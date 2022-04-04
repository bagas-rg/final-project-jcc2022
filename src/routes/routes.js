import React from 'react';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from '../pages/home/Home';
import Dashboard from '../pages/dashboard/Dashboard';
import LandingLayout from '../layout/landing/LandingLayout';
import DashboardLayout from '../layout/dashboard/DashboardLayout';

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact>
            <LandingLayout>
              <Home />
            </LandingLayout>
          </Route>
          <Route path={'/Dashboard'} exact>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Routes;
