import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/Home';
import { theme } from './themes';
import { Header } from './components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AircraftLists from './pages/aircraft/AircraftLists';
import AircraftLatestDetails from './pages/aircraft/AircraftLatestDetails';
import Footer from './components/footer/Footer';
import TrendingAircraftOne from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftOne';
import TrendingAircraftTwo from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftTwo';
import TrendingAircraftThree from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftThree';
import TrendingAircraftFour from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftFour';
import TrendingAircraftFive from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftFive';
import TrendingAircraftSix from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftSix';
import TrendingAircraftSeven from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftSeven';
import TrendingAircraftEight from './pages/aircraft/modules/trendingAircrafts/TrendingAircraftEight';
import HomeAircraftOne from './pages/aircraft/modules/homeAircrafts/HomeAircraftOne';
import HomeAircraftTwo from './pages/aircraft/modules/homeAircrafts/HomeAircraftTwo';
import HomeAircraftThree from './pages/aircraft/modules/homeAircrafts/HomeAircraftThree';
import HomeAircraftFour from './pages/aircraft/modules/homeAircrafts/HomeAircraftFour';
import HomeAircraftFive from './pages/aircraft/modules/homeAircrafts/HomeAircraftFive';
import LatestAircraftOne from './pages/aircraft/modules/latestAircrafts/LatestAircraftOne';
import LatestAircraftTwo from './pages/aircraft/modules/latestAircrafts/LatestAircraftTwo';
import LatestAircraftThree from './pages/aircraft/modules/latestAircrafts/LatestAircraftThree';
import LatestAircraftFour from './pages/aircraft/modules/latestAircrafts/LatestAircraftFour';
import LatestAircraftFive from './pages/aircraft/modules/latestAircrafts/LatestAircraftFive';
import LatestAircraftSix from './pages/aircraft/modules/latestAircrafts/LatestAircraftSix';
import LatestAircraftSeven from './pages/aircraft/modules/latestAircrafts/LatestAircraftSeven';
import LatestAircraftEight from './pages/aircraft/modules/latestAircrafts/LatestAircraftEight';

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
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a1/latest/details'
            element={<LatestAircraftOne />}
          />
          <Route
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a2/latest/details'
            element={<LatestAircraftTwo />}
          />
          <Route
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a3/latest/details'
            element={<LatestAircraftThree />}
          />
          <Route
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a4/latest/details'
            element={<LatestAircraftFour />}
          />
          <Route
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a5/latest/details'
            element={<LatestAircraftFive />}
          />
          <Route
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a6/latest/details'
            element={<LatestAircraftSix />}
          />
          <Route
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a7/latest/details'
            element={<LatestAircraftSeven />}
          />
          <Route
            path='/aircrafts-for-sale/3c0cc1ba-320f-4c16-b976-c1c867a7650a8/latest/details'
            element={<LatestAircraftEight />}
          />
          <Route
            path='/aircrafts-for-sale/:jetId/latest/details'
            element={<AircraftLatestDetails />}
          />
          <Route
            path='/aircrafts-for-sale/24510089-73f7-4d02-87ee-4f5198fe73a1/details'
            element={<HomeAircraftOne />}
          />
          <Route
            path='/aircrafts-for-sale/24510089-73f7-4d02-87ee-4f5198fe73a2/details'
            element={<HomeAircraftTwo />}
          />
          <Route
            path='/aircrafts-for-sale/24510089-73f7-4d02-87ee-4f5198fe73a3/details'
            element={<HomeAircraftThree />}
          />
          <Route
            path='/aircrafts-for-sale/24510089-73f7-4d02-87ee-4f5198fe73a4/details'
            element={<HomeAircraftFour />}
          />
          <Route
            path='/aircrafts-for-sale/24510089-73f7-4d02-87ee-4f5198fe73a5/details'
            element={<HomeAircraftFive />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
      <ToastContainer />
    </ThemeProvider>
  );
};

export default App;
