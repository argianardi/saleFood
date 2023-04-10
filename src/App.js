import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Pagination from './components/Pagination';
import AnalyticsInfo from './components/AnalyticsInfo';
import TopMenu from './components/TopMenu';
import Hero from './components/Hero';
import SideBar from './components/SideBar';
import CustomersTable from './components/CustomersTable';

const App = () => {
  return (
    <div className="flex justify-between px-1 xl:px-4">
      <SideBar />
      <div className="w-full pl-1 xl:pl-4">
        <Header />
        <div className="flex flex-col justify-between mt-4 lg:flex-row">
          <div className="mr-3 lg:w-[80%] 2xl:w-auto mb-6">
            <Hero />
            <CustomersTable />
            <Pagination />
          </div>
          <div className="flex flex-col items-center justify-around gap-0 mb-3 xs:gap-x-1 lg:gap-x-0 xs:flex-row lg:block lg:mb-0">
            <AnalyticsInfo />
            <TopMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
