import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from './pages/home/Home';
import { theme } from './themes';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AircraftLists from './pages/aircraft/AircraftLists';
import AircraftLatestDetails from './pages/aircraft/AircraftLatestDetails';
import Footer from './components/footer/Footer';
import TrendingAircraftOne from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftOne';
import TrendingAircraftTwo from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftTwo';
import TrendingAircraftThree from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftOne';
import TrendingAircraftFour from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftFour';
import TrendingAircraftFive from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftOneFive';
import TrendingAircraftSix from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftOneSix';
import TrendingAircraftSeven from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftOneSeven';
import TrendingAircraftEight from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftOneEight';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aircrafts-for-sale' element={<AircraftLists />} />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b81/details'
            element={<TrendingAircraftOne />}
          />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b82/details'
            element={<TrendingAircraftTwo />}
          />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b83/details'
            element={<TrendingAircraftThree />}
          />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b84/details'
            element={<TrendingAircraftFour />}
          />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b85/details'
            element={<TrendingAircraftFive />}
          />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b86/details'
            element={<TrendingAircraftSix />}
          />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b87/details'
            element={<TrendingAircraftSeven />}
          />
          <Route
            path='/aircrafts-for-sale/24410089-73f7-4d02-87ee-4f5198fe73b88/details'
            element={<TrendingAircraftEight />}
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
