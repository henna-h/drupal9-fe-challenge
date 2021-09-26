import React from 'react'

const Hotel = ({ hotel }) => {

    return (
        <div key={hotel.id}>
          <img src={hotel.imageUrl} alt={hotel.name} height="200" width="200" />
          <h3>{hotel.name}</h3>
          <p>{hotel.city}, {hotel.country}</p>

          <p>Available: {hotel.isAvailable == true ? <p>Yes</p> : <p>No</p>}</p>

          <p>Swimming pool: {hotel.hasSwimmingPool == true ? <p>Yes</p> : <p>No</p>}</p>

          <h2>{hotel.price}</h2>

        </div>
    )
}

export default Hotel