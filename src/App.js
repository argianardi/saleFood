import './styles/App.css';
import React from 'react';
import Header from './components/Header';
import Pagination from './components/Pagination';
import AnalyticsInfo from './components/AnalyticsInfo';
import TopMenu from './components/TopMenu';
import Hero from './components/Hero';
import SideBar from './components/SideBar';

const App = () => {
  return (
    <div className="flex justify-between px-1 xl:px-4">
      <SideBar />
      <div className="w-full pl-1 xl:pl-4">
        <Header />
        <div className="flex flex-col justify-between mt-4 lg:flex-row">
          <div className="mr-3 lg:w-[80%] 2xl:w-auto">
            <Hero />
            <Pagination />
          </div>
          <div className="flex justify-evenly lg:block">
            <AnalyticsInfo />
            <TopMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
