import { useReducer } from 'react';

import BookingForm from '../components/BookingForm';
import { fetchAPI, submitAPI } from '../utils/api';

const updateTimes = (availableTimes, bookingDate) => 
  fetchAPI(new Date(bookingDate));

const initializeTimes = (initialAvailableTimes) => 
  [...initialAvailableTimes, ...fetchAPI(new Date())];

const submitForm = formData => submitAPI(formData); 

const Bookings = () => {
  const [
    availableTimes, 
    dispatchOnBookingDateChange
  ] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div className="container-grid">
      <BookingForm 
        availableTimes={availableTimes} 
        dispatchOnBookingDateChange={dispatchOnBookingDateChange} 
        submitForm={submitForm} 
      />
    </div>
  );
};

export default Bookings;
