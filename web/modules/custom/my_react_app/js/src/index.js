import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Select from 'react-select'

const Root = () => {
  console.log(drupalSettings.hotels)
  const allHotels = drupalSettings.hotels

  const hotelCountries = Array.from(new Set(allHotels.map(hotel => hotel.country)))
  console.log(hotelCountries)

  const [hotels, setHotels] = useState(allHotels)
  const [countries, setCountries] = useState(hotelCountries)
  const [availabilityChecked, setAvailabilityChecked] = useState(false)

  const [filter, setFilter] = useState({countries: countries, availableOnly: availabilityChecked})
  console.log(filter)
  console.log("countries: " + countries)
  console.log("availabilityChecked: " + availabilityChecked)

  const handleCountryChange = e => {
    
    console.log(e)
    setCountries([e.target.value])
    setFilter({ ...filter, countries: e.target.value })
    //console.log(hotels)
  }

  const handleAvailabilityChange = () => {
    setAvailabilityChecked(!availabilityChecked)
    setFilter({ ...filter, availableOnly: !availabilityChecked })
    //console.log(filter)
  }

  const filterFunction = (hotel) => {
    if(!filter.countries.includes(hotel.country)){
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
          <p>{hotel.name}</p>
        </div>
      ))}
    </div>
  )
}

render(<Root/>, document.querySelector('#root'));
