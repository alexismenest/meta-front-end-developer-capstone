import {
Route, 
Routes
} from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/ConfirmedBooking';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reservations" element={<Bookings />} />
          <Route path="/reservation-confirmation" element={<ConfirmedBooking />} />
        </Routes>
      </Main>
      <Footer />
    </>
  );
};

export default App;
