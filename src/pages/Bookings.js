import { useReducer } from 'react';
import { useNavigate } from 'react-router-dom';

import { fetchAPI, submitAPI } from '../utils/fakeAPI';
import BookingForm from '../components/BookingForm';

const updateTimes = (availableTimes, bookingDate) => {
  const response = fetchAPI(new Date(bookingDate));
  return (response.length !== 0) ? response : availableTimes; 
};

const initializeTimes = initialAvailableTimes => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const Bookings = () => {
  const [
    availableTimes, 
    dispatchOnBookingDateChange
  ] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = formData => {
    const response = submitAPI(formData);
    if (response) navigate('/booking-confirmation');
  }; 

  return (
    <div className="container">
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnBookingDateChange={dispatchOnBookingDateChange} 
        submitForm={submitForm} 
      />
    </div>
  );
};

export default Bookings;
