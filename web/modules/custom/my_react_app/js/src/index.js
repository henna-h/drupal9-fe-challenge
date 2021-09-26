import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Select from 'react-select'

const Root = () => {

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
          <img src={hotel.imageUrl} alt={hotel.name} height="200" width="200" />
          <h3>{hotel.name}</h3>
          <p>{hotel.city}, {hotel.country}</p>

          <p>Available: {hotel.isAvailable == true ? <p>Yes</p> : <p>No</p>}</p>

          <p>Swimming pool: {hotel.hasSwimmingPool == true ? <p>Yes</p> : <p>No</p>}</p>

          <h2>{hotel.price}</h2>

        </div>
      ))}
    </div>
  )
}

render(<Root/>, document.querySelector('#root'));
