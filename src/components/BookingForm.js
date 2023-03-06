import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BookingForm = ({availableTimes, dispatchOnBookingDateChange, submitForm}) => {
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingNumberGuests, setBookingNumberGuests] = useState(1);

  const navigate = useNavigate();

  const handleBookingDateChange = (e) => {
    setBookingDate(e.target.value);
    dispatchOnBookingDateChange(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = {
      bookingDate,
      bookingTime,
      bookingNumberGuests
    };
    if (submitForm(formData)) navigate('/reservation-confirmation');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="booking-date">Choose date</label>
        <input 
          type="date" 
          id="booking-date" 
          name="booking-date" 
          value={bookingDate} 
          onChange={handleBookingDateChange}
        />
      </div>
      <div>
        <label htmlFor="booking-time">Choose time</label>
        <select 
          id="booking-time" 
          name="booking-time" 
          value={bookingTime} 
          onChange={e => setBookingTime(e.target.value)}
        >
          {availableTimes.map(times => 
            <option key={times}>{times}</option>
          )}
        </select>
      </div>
      <div>
        <label htmlFor="booking-number-guests">Number of guests</label>
        <input 
          type="number" 
          id="booking-number-guests" 
          name="booking-number-guests" 
          value={bookingNumberGuests} 
          onChange={e => setBookingNumberGuests(e.target.value)}
        />
      </div>
      <button type="submit" disabled={false}>
        Make your reservation
      </button>
    </form>
  );
};

export default BookingForm;
