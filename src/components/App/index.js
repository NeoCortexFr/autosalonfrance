import React from 'react';

import './app.scss';

import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import Page from 'src/components/Page';

const App = () => (
  <div className="app">
    <Header />
    <Page />
    <Footer />
  </div>
);

export default App;
