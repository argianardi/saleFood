import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';
import AnalyticsInfo from './components/AnalyticsInfo';
import TopMenu from './components/TopMenu';
import Hero from './components/Hero';

const App = () => {
  return (
    <div className="min-h-screen px-2">
      <Header />
      <div className="flex justify-between mt-4">
        <div>
          <Hero />
          <Pagination />
        </div>
        <div>
          <AnalyticsInfo />
          <TopMenu />
        </div>
      </div>
    </div>
  );
};

export default App;
