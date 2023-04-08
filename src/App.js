import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';
import AnalyticsInfo from './components/AnalyticsInfo';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Pagination />
      <AnalyticsInfo />
    </div>
  );
};

export default App;
