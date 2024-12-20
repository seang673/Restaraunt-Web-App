import React, {useState} from 'react';


const BookingForm = (props) => {

    //state data
    const [date, setDate] = useState('');
    const [times, setTimes] = useState('');
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');


    const handleDateChange = (event) => {
      setDate(event);
      props.dispatch(event);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      props.SubmitForm(event);
      // Handle form submission logic here

    };



    return (
      <header>
        <section>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div>
                  {/*for choosing date*/}
                  <label htmlFor="res-date">Choose date:</label>
                  <input
                    id="res-date"
                    value={date}
                    onChange={(e) => handleDateChange(e.target.value)} type='date' required/>
                </div>
                {/*for choosing time*/}
                <div>
                      <label htmlFor="res-time">Choose time:</label>
                      <select
                        id="res-time" value={times} onChange={(e) => setTimes(e.target.value)}>
                          <option value="">Select a time</option>
                          {
                            //Maps out array with time options if the properties below are already defined//
                            props.availableTimes && props.availableTimes.availableTimes ? (

                              props.availableTimes.availableTimes.map((availableTime) =>
                              {return <option key={availableTime} value={availableTime}>{availableTime}</option>;
                              })
                            ) : (<option disabled>No available times</option>)
                          }
                      </select>
                  </div>
                   {/*for choosing guests*/}
                    <div>
                        <label htmlFor="guests">Number of Guests:</label>
                        <input
                          type="number"
                          placeholder="1"
                          min="1"
                          max="10"
                          id="guests"
                          value={guests}
                          onChange={(e) => setGuests(e.target.value)}
                        />
                    </div>
                    {/*for choosing occasion*/}
                      <div>
                          <label htmlFor="occasion">Occasion:</label>
                          <select
                            id="occasion"
                            key = {occasion}
                            value={occasion}
                            onChange={(e) => setOccasion(e.target.value)}
                          >
                            <option value="Birthday">Birthday</option>
                            <option value="Anniversary">Anniversary</option>
                          </select>
                      </div>

                      {/*Submit Button*/}
                      <div className='buttonReceive'>
                        <input aria-label='On Click' type="submit" value={"Make Your Reservation"} />
                      </div>
            </fieldset>
          </form>
        </section>
      </header>


    );
  }

  export default BookingForm;

