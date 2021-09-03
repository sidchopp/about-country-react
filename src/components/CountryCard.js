import React from 'react'
import { Card, Icon, Image, Segment, Container } from 'semantic-ui-react'

const CountryCard = ({ cardInfo }) => (


  <Container style={{ marginTop: "50px" }} text textAlign='center'>
    <Card fluid centered>
      {console.log(cardInfo)}
      <Image src={cardInfo.flag} wrapped ui={false} />
      <Card.Content>
        <Card.Header > {cardInfo.name}</Card.Header>
        <Card.Meta><Icon name='star' /> {cardInfo.capital}</Card.Meta>
        <Card.Description>
          <div> <Icon name='globe' />Region: {cardInfo.region}</div>
          <div> <Icon name='location arrow' />Sub-Region: {cardInfo.subregion}</div>
          <div><Icon name='users' />Population : {+(cardInfo.population / 1000000).toFixed(1)} Million</div>
          <div><Icon name='money bill alternate' />Currency:  {cardInfo.currencies[0].name} ({cardInfo.currencies[0].symbol})</div>
          <div><Icon name='chat' />Main Language: {cardInfo.languages[0].name}</div>
          <div><Icon name='expand' />Shares border with: {cardInfo.borders}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='hourglass' />
          Time Zone(s): {cardInfo.timezones.map((time) => <> {time}</>)

          }
        </a>
      </Card.Content>
    </Card >
  </Container>



)

export default CountryCard;