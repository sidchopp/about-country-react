import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'

// CSS
import '../App.css'

function AllCountriesCards({ allCountries }) {
  // console.log(allCountries);
  return (
    <div>
      <Card raised className='font ' style={{ padding: '25px', margin: '20px' }} >
        <Label attached='top '>{allCountries.region}</Label>
        <Card.Content>
          <Card.Header className='uppercase' style={{ marginBottom: '5px' }} >
            {allCountries.name}
          </Card.Header>
          <Card.Meta >
            Capital:
            {allCountries.capital}
          </Card.Meta>
          <Image rounded size='small' style={{ margin: '15px' }} src={allCountries.flags.png} wrapped />
          <Card.Description>
            {/* <div>
              <span>
                <b>  Region:</b>
              </span>
              <span> {allCountries.region} </span>
            </div> */}
            <div>
              <span>
                <b>  Sub-Region:</b>
              </span>
              <span>{[allCountries.subregion]}</span>
            </div>
            <div>
              <span>
                <b>  Area:</b>
              </span>
              <span>
                {+(allCountries.area / 1000).toFixed(1)}K sq.km
              </span>
              <div>
                <span>
                  <b> Language:</b>
                </span>
                <span>
                  {allCountries.languages[0].name}
                </span>
              </div>
            </div>
            <div>
              <span>
                <b> Population:</b>
              </span>
              <span>
                {+(allCountries.population / 1000000).toFixed(4)} M
              </span>
            </div>
          </Card.Description>
        </Card.Content>
      </Card >
    </div>
  )
}

export default AllCountriesCards;


