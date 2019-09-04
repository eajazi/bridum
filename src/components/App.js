import React from 'react';
import Navigationbar from './navigation_bar/NavigationBar';

import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from '../components/scroll_to_top/ScrollToTop';
import Routes from '../routes';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <main>
          <Navigationbar />
          <Routes />
        </main>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
