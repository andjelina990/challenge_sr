import './App.css';
import { Routes, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home';
import AddEvent from './pages/AddEvent/AddEvent';
import React, { useEffect, useState } from 'react';
import jsonData from './data.json';

import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Detail from './pages/Detail/Detail';

export const DataContext = React.createContext(null);

function App() {
  const [sportEvents, setSportEvents] = useState(jsonData.data);
  const [toggleAside, setToggleAside] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', switchAside);
    return () => {
      window.removeEventListener('resize', switchAside);
    };
  }, []);

  function switchAside() {
    if (window.innerWidth < 1170) {
      setToggleAside(true);
    } else {
      setToggleAside(false);
    }
  }

  const toggleSidebar = (e) => {
    e.preventDefault();
    setToggleAside(!toggleAside);
  };

  return (
    <div
      id="main-wrapper"
      data-layout="vertical"
      data-navbarbg="skin5"
      data-sidebar-position="absolute"
      data-header-position="absolute"
      data-boxed-layout="full"
      data-sidebartype={toggleAside ? 'mini-sidebar' : 'full'}
      className={toggleAside ? 'mini-sidebar' : null}
    >
      <Header toggleSidebar={toggleSidebar} />

      <Navigation />
      <DataContext.Provider value={{ sportEvents }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/detail/:id" element={<Detail />} />
        </Routes>
      </DataContext.Provider>
    </div>
  );
}

export default App;
