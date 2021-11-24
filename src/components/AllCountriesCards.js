import React from 'react'
import { Card, Icon, Image, Container, Header, Button, Divider, CardDescription } from 'semantic-ui-react'

// CSS
import '../App.css'

function AllCountriesCards({ allCountries }) {
  console.log(allCountries);

  return (
    <Container class="ui grid" style={{ marginTop: "50px" }}  >
      {/* <Card.Group itemsPerRow={1}> */}
      <Card raised className='font all-country-cards' style={{ padding: '25px' }} centered >
        <Card.Content>
          <Card.Header className='uppercase' style={{ margin: '15px', fontSize: '30px' }} >
            {allCountries.name}
          </Card.Header>
          <Card.Meta style={{ margin: '10px', fontSize: '20px' }}>
            <Icon name='star' />
            Capital <Icon name='caret right' />
            {allCountries.capital}
          </Card.Meta>
          <Card.Description>
            <div>
              <Icon name='circle' />
              <span>
                <b>  Region<Icon name='caret right' /></b>
              </span>
              <span> {allCountries.region} </span>
            </div>
            <div>
              <Icon name='dot circle' />
              <span>
                <b>  Sub-Region<Icon name='caret right' /></b>
              </span>
              <span>{allCountries.subregion}</span>
            </div>
            <div>
              <Icon name='area chart' />
              <span>
                <b>  Area <Icon name='caret right' /></b>
              </span>
              <span>
                About {+(allCountries.area / 1000000).toFixed(1)} Million km sq.
              </span>
            </div>
          </Card.Description>
        </Card.Content>
      </Card >
      {/* </Card.Group> */}
    </Container >
  )
}

export default AllCountriesCards;


