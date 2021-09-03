import React from 'react'
import { Card, Icon, Image, Segment, Container } from 'semantic-ui-react'

const CountryCard = ({ cardInfo, cardCity }) => (
  <Container style={{ marginTop: "50px" }} text textAlign='center'>
    <div> <Icon name='hand point right' />{cardCity}</div>
    <Card fluid centered>
      <Image src={cardInfo.flag} wrapped ui={false} />
      <Card.Content>
        <Card.Header ><Icon name='globe' /> {cardInfo.name}</Card.Header>
        <Card.Meta><Icon name='star' /> {cardInfo.capital}</Card.Meta>
        <Card.Description>
          <div> <Icon name='th large' />Region: {cardInfo.region}</div>
          <div> <Icon name='th' />Sub-Region: {cardInfo.subregion}</div>
          <div><Icon name='users' />Population : {+(cardInfo.population / 1000000).toFixed(1)} Million</div>
          <div><Icon name='money bill alternate' />Currency:  {cardInfo.currencies[0].name} ({cardInfo.currencies[0].symbol})</div>
          <div><Icon name='comments' />Main Language: {cardInfo.languages[0].name}</div>
          <div><Icon name='expand' />Shares border with: {cardInfo.borders.toString()}</div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='clock' />
        Time Zone(s): {cardInfo.timezones.map((time) => < > {time}</>)
        }
      </Card.Content>
    </Card >
  </Container>
)

export default CountryCard;