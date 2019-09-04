import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/header/Header';
import SaveTheDate from '../../components/save_the_date/SaveTheDate';
import Scroll from '../../components/scroll/Scroll';

const Home = () => {
  return (
    <div>
      <Helmet titleTemplate="%s - Home" defaultTitle="Bridum - Edis & Doris">
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>

      <Header />
      <SaveTheDate />
    </div>
  );
};

export default Home;
