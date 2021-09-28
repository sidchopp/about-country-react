import React from 'react'
import { Card, Icon, Image, Container, Header } from 'semantic-ui-react'
// CSS

import '../App.css'

const CountryCard = ({ cardInfo, cardCity }) => (
  <Container style={{ marginTop: "50px" }} text textAlign='center'>
    {/* <Card raised className='font' style={{ padding: '10px' }} fluid centered>
      <Header  > Your Location</Header >
      <Header.Subheader><Icon name="map marker alternate" />{cardCity}</Header.Subheader>
    </Card> */}
    <Card raised className='font' style={{ padding: '25px' }} fluid centered>
      <Header> Your Location</Header >
      <Header.Subheader><Icon name="map marker alternate" />{cardCity}.</Header.Subheader>
      <Image style={{ margin: '15px' }} src={cardInfo.flags[0]} wrapped ui={false} />
      <Card.Content>
        <Card.Header className='uppercase' style={{ margin: '15px', fontSize: '30px' }} ><Icon name='globe' />
          {cardInfo.name.official}
        </Card.Header>
        <Card.Meta style={{ margin: '10px', fontSize: '20px' }}><Icon name='star' />
          {cardInfo.capital}
        </Card.Meta>
        <Card.Description>
          <div>
            <Icon name='circle' />
            <span><b>  Region<Icon name='caret right' /></b></span>
            <span>{cardInfo.region}</span>
          </div>
          <div>
            <Icon name='dot circle' />
            <span><b>  Sub-Region<Icon name='caret right' /></b></span>
            <span>{cardInfo.subregion}</span>
          </div>
          <div>
            <Icon name='area chart' />
            <span><b>  Area <Icon name='caret right' /></b></span>
            <span> About {+(cardInfo.area / 1000000).toFixed(1)} Million km sq.</span>
          </div>
          <div>
            <Icon name='money bill alternate' />
            <span><b> Currency<Icon name='caret right' /></b></span>
            <span>{cardInfo.currencies.CAD.name} ({cardInfo.currencies.CAD.symbol})</span>
          </div>
          <div>
            {/* <Icon name='comments' /> */}
            {/* <span><b>  Main Language <Icon name='caret right' /></b></span>
            <span>{cardInfo.languages}</span> */}
          </div>
          <div>
            <Icon name='expand' />
            <span><b>  Bordering Countries<Icon name='caret right' /></b></span>
            <span>{cardInfo.borders.toString()}</span>
          </div>
        </Card.Description>
      </Card.Content>
      {/* <Card.Content extra>
        <Icon name='clock' /> Time Zone(s): {cardInfo.timezones.toString()}
      </Card.Content> */}
    </Card >
  </Container >
)

export default CountryCard;

