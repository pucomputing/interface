import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { PageHome, PageAbout, PageNotFound, PageContact } from './page/';
import { CustomNavbar, CustomFooter } from './component/';

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <CustomNavbar />
        </header>
        <main>
          <Switch>
            <Route path="/" exact component={PageHome} />
            <Route path="/about/" component={PageAbout} />
            <Route path="/contact/" component={PageContact} />
            <Route component={PageNotFound} />
          </Switch>
        </main>
        <footer>
          <CustomFooter />
        </footer>
      </div>
    </BrowserRouter>
  );
}