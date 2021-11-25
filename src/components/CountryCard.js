import React from 'react'
import { Card, Icon, Image, Container, Header, Button, Divider } from 'semantic-ui-react'

//Components
import Footer from './Footer'

// CSS
import '../App.css'


function CountryCard({ cardInfo, cardCity }) {
  return (
    // To make container small use "text" attribute
    <Container text style={{ marginTop: "50px" }} >
      <Card raised className='font' style={{ padding: '25px', marginBottom: "50px" }} fluid centered>
        <Divider horizontal><Icon name='map signs' />
          {" "} Your Location
        </Divider >
        <Header.Subheader>
          <Icon name="map marker alternate" />
          {cardCity}.
        </Header.Subheader>
        <Divider horizontal >
          <Icon name='compass' />
          {" "} Your Country
        </Divider>
        <Image style={{ margin: '15px' }} src={cardInfo.flags[0]} wrapped ui={false} />
        <Card.Content>
          <Card.Header className='uppercase' style={{ margin: '15px', fontSize: '30px' }} >
            <Icon name='globe' />
            {cardInfo.name.official}
          </Card.Header>
          <Card.Meta style={{ margin: '10px', fontSize: '20px' }}>
            <Icon name='star' />
            Capital <Icon name='caret right' />
            {cardInfo.capital}
          </Card.Meta>
          <Card.Description>
            <div>
              <Icon name='circle' />
              <span>
                <b>  Region<Icon name='caret right' /></b>
              </span>
              <span> {cardInfo.region} </span>
            </div>
            <div>
              <Icon name='dot circle' />
              <span>
                <b>  Sub-Region<Icon name='caret right' /></b>
              </span>
              <span>{cardInfo.subregion}</span>
            </div>
            <div>
              <Icon name='area chart' />
              <span>
                <b>  Area <Icon name='caret right' /></b>
              </span>
              <span>
                About {+(cardInfo.area / 1000000).toFixed(1)} Million km sq.
              </span>
            </div>
            <div>
              <Icon name='money bill alternate' />
              <span>
                <b> Currency<Icon name='caret right' /></b>
              </span>
              <span>
                {Object.keys(cardInfo.currencies)}
              </span>
            </div>
            <div>
            </div>
            <div>
              <Icon name='expand' />
              <span>
                <b>  Bordering Countries<Icon name='caret right' /></b>
              </span>
              <span>{cardInfo.borders.toString()}</span>
            </div>
          </Card.Description>
        </Card.Content>
        <Button primary as='a' href={Object.values(cardInfo.maps)[0]} rel="noreferrer" target='_blank'>
          Google Map
        </Button>
        <Divider />

        {/* Component Import */}
        <Footer />
        {/*  */}

      </Card >
    </Container >
  )
}

export default CountryCard;

