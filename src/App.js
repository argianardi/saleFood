import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';

const App = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Pagination />
    </div>
  );
};

export default App;
