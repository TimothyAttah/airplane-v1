import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home/Home';
import { theme } from './themes';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AircraftLists from './pages/aircraft/AircraftLists';
import AircraftDetails from './pages/aircraft/AircraftDetails';
import AircraftLatestDetails from './pages/aircraft/AircraftLatestDetails';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aircrafts-for-sale' element={<AircraftLists />} />
          <Route
            path='/aircrafts-for-sale/:jetId/details'
            element={<AircraftDetails />}
          />
          <Route
            path='/aircrafts-for-sale/:jetId/latest/details'
            element={<AircraftLatestDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
