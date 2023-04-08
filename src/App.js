import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';
import AnalyticsInfo from './components/AnalyticsInfo';
import TopMenu from './components/TopMenu';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <AnalyticsInfo />
      <TopMenu />
      <Pagination />
    </div>
  );
};

export default App;
