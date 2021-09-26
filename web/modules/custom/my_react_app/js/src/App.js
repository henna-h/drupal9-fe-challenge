import React, { useState } from 'react';
import Hotel from './components/Hotel'

const App = () => {

  const allHotels = drupalSettings.hotels

  const hotelCountries = Array.from(new Set(allHotels.map(hotel => hotel.country)))

  const [hotels, setHotels] = useState(allHotels)
  const [countries, setCountries] = useState(hotelCountries)
  const [availabilityChecked, setAvailabilityChecked] = useState(false)

  const handleCountryChange = e => {
    
    console.log(e)
    setCountries([e.target.value])
  }

  const handleAvailabilityChange = () => {

    setAvailabilityChecked(!availabilityChecked)
  }

  const filterFunction = (hotel) => {
    if(!countries.includes(hotel.country)){
      return false

    } else if(availabilityChecked == true && hotel.isAvailable == false){
      return false
    }

    return true
  }


  return (
    <div>
      <select onChange={handleCountryChange}>
        <option value={hotelCountries} selected="selected"></option>
        {hotelCountries.map(hotelCountry=>(
          <option value={[hotelCountry]}>{hotelCountry}</option>
        ))}
      </select>

      <input 
        type="checkbox"
        id="available"
        name="available"
        checked={availabilityChecked}
        onChange={handleAvailabilityChange}
      >
      </input>
      <label for="available">Is available</label>

      {hotels.filter(hotel => filterFunction(hotel)).map(hotel => (
        <div key={hotel.id}>
          <Hotel hotel={hotel} />

        </div>
      ))}
    </div>
  )
}

export default App