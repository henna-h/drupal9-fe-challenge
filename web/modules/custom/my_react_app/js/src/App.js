import React, { useState } from 'react';
import Hotel from './components/Hotel'
import styled from 'styled-components'

const FilterRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2em;
    max-width: 19em;
`
const CountryFilter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const AvailabilityFilter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`

const App = () => {

  const allHotels = drupalSettings.hotels

  const allHotelCountries = Array.from(new Set(allHotels.filter(hotel => hotel.country).map(hotel => hotel.country)))

  const [hotels, setHotels] = useState(allHotels)
  const [countries, setCountries] = useState(allHotelCountries)
  const [availabilityChecked, setAvailabilityChecked] = useState(false)

  console.log(countries)

  const handleCountryChange = e => {
    
    console.log(e)
    setCountries(e.target.value)
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

      <FilterRow>
        <CountryFilter>
            <label for="country">Filter by Country</label>
            <select id="country" onChange={handleCountryChange}>
                <option value={allHotelCountries} selected="selected"></option>
                {allHotelCountries.map(hotelCountry=>(
                <option value={[hotelCountry]}>{hotelCountry}</option>
                ))}
            </select>
        </CountryFilter>
        <AvailabilityFilter>
            <input 
                type="checkbox"
                id="available"
                name="available"
                checked={availabilityChecked}
                onChange={handleAvailabilityChange}
            >
            </input>
            <label for="available">Is available</label>
        </AvailabilityFilter>
      </FilterRow>

      {hotels.filter(hotel => filterFunction(hotel)).map(hotel => (
        <div key={hotel.id}>
          <Hotel hotel={hotel} />
        </div>
      ))}
    </div>
  )
}

export default App