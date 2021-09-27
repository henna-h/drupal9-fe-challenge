import React from 'react'
import styled, { css } from 'styled-components'

const HotelBox = styled.div`
    background: WhiteSmoke;
    height: auto;
    margin-bottom: 2em;
    padding: 1em;
    display: flex;
    max-width: 100em;

    @media only screen and (max-width: 630px) {
        flex-direction: column;
    }

    @media only screen and (min-width: 630px) {
        flex-direction: row;
    }
    
    justify-content: space-between;
    align-items: center;
`

const HotelImage = styled.img`
    height: 15em;
    width: 15em;
    display: inline-block;
    float: left;
`

const Column = styled.div`
    float: center;
    display: flex;
    flex-direction: column;

    @media only screen and (max-width: 600px) {
        justify-content: center;
    }

    @media only screen and (min-width: 600px) {
        justify-content: flex-start;
    }
`

const ColumnItem = styled.div`
    
`

const TextRow = styled.div`
    display: flex;
    flex-direction: row;
`

const TextWithLeftMargin = styled.p`
    margin-right: 0.5em;
`

const Hotel = ({ hotel }) => {

    return (
        <HotelBox key={hotel.id}>
            
          <Column>
            <HotelImage src={hotel.imageUrl} alt={hotel.name} />
          </Column>

          <Column>
            <ColumnItem>
                <h3>{hotel.name}</h3>
                <p>{hotel.city}, {hotel.country}</p>
            </ColumnItem>

            <ColumnItem>
                <TextRow>
                    <TextWithLeftMargin>Available: </TextWithLeftMargin> {hotel.isAvailable == true ? <p> Yes</p> : <p> No</p>}
                </TextRow>
                <TextRow>
                    <TextWithLeftMargin>Swimming pool: </TextWithLeftMargin> {hotel.hasSwimmingPool == true ? <p> Yes</p> : <p> No</p>}
                </TextRow>
            </ColumnItem>

          </Column>
        
          <Column>
            <h3>{hotel.price}</h3>
          </Column>

        </HotelBox>
    )
}

export default Hotel