import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

// CSS
import '../App.css'

function AllCountriesCards({ allCountries }) {
  // console.log(allCountries);
  return (
    <div>
      <Card raised className='font ' style={{ padding: '25px', margin: '20px' }} >
        <Card.Content>
          <Card.Header className='uppercase' style={{ marginBottom: '5px' }} >
            {allCountries.name}
          </Card.Header>
          <Card.Meta >
            Capital <Icon name='caret right' />
            {allCountries.capital}
          </Card.Meta>
          <Image rounded size='small' style={{ margin: '15px' }} src={allCountries.flags.png} wrapped />
          <Card.Description>
            <div>
              <span>
                <b>  Region<Icon name='caret right' /></b>
              </span>
              <span> {allCountries.region} </span>
            </div>
            <div>
              <span>
                <b>  Sub-Region<Icon name='caret right' /></b>
              </span>
              <span>{allCountries.subregion}</span>
            </div>
            <div>
              <span>
                <b>  Area <Icon name='caret right' /></b>
              </span>
              <span>
                About {+(allCountries.area / 1000).toFixed(1)} Thousand km sq.
              </span>
            </div>
          </Card.Description>
        </Card.Content>
      </Card >
    </div>
  )
}

export default AllCountriesCards;


