import React from 'react'
import styled from 'styled-components'

const HotelBox = styled.div`
    background: Gainsboro;
    height: 17em;
    margin-bottom: 2em;
    padding: 1em;
    display: flex;
    flex-direction: row;
    justify-content: space-between
`

const HotelImage = styled.img`
    height: 15em;
    width: 15em;
    display: inline-block;
    float: left;
`

const HotelMiddleColumn = styled.div`
    float: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-center;
`

const HotelLeftColumn = styled.div`
    float: right;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Span = styled.div`
    display: flex;
    flex-direction: row;
`

const Hotel = ({ hotel }) => {

    return (
        <HotelBox key={hotel.id}>
          <HotelImage src={hotel.imageUrl} alt={hotel.name} />

          <HotelMiddleColumn>
            <h3>{hotel.name}</h3>
            <p>{hotel.city}, {hotel.country}</p>

            <Span><p>Available: </p> {hotel.isAvailable == true ? <p> Yes</p> : <p> No</p>}</Span>

            <Span><p>Swimming pool: </p> {hotel.hasSwimmingPool == true ? <p> Yes</p> : <p> No</p>}</Span>

          </HotelMiddleColumn>
        
          <HotelLeftColumn>
            <h2>{hotel.price}</h2>
          </HotelLeftColumn>

        </HotelBox>
    )
}

export default Hotel