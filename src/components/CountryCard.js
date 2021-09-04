import React from 'react'
import { Card, Icon, Image, Segment, Container, Header } from 'semantic-ui-react'

const CountryCard = ({ cardInfo, cardCity }) => (
  <Container style={{ marginTop: "50px" }} text textAlign='center'>
    <Header >Your Location : {cardCity}</Header >
    <Card fluid centered>
      <Image src={cardInfo.flag} wrapped ui={false} />
      <Card.Content>
        <Card.Header style={{ margin: '15px', fontSize: '30px' }} ><Icon name='globe' /> {cardInfo.name}</Card.Header>
        <Card.Meta style={{ margin: '10px', fontSize: '20px' }}><Icon name='star' /> {cardInfo.capital}</Card.Meta>
        <Card.Description>
          <div>
            <Icon name='circle' />
            <span><b>  Region<Icon name='caret right' /></b></span>
            <span>{cardInfo.region}</span>
          </div>
          <div>
            <Icon name='dot circle ' />
            <span><b>  Sub-Region<Icon name='caret right' /></b></span>
            <span>{cardInfo.subregion}</span>
          </div>
          <div>
            <Icon name='users' />
            <span><b>  Population <Icon name='caret right' /></b></span>
            <span>{+(cardInfo.population / 1000000).toFixed(1)} Million</span>
          </div>
          <div>
            <Icon name='money bill alternate' />
            <span><b> Currency<Icon name='caret right' /></b></span>
            <span>{cardInfo.currencies[0].name} ({cardInfo.currencies[0].symbol})</span>
          </div>
          <div>
            <Icon name='comments' />
            <span><b>  Main Language <Icon name='caret right' /></b></span>
            <span>{cardInfo.languages[0].name}</span>
          </div>
          <div>
            <Icon name='expand' />
            <span><b>  Bordering Countries<Icon name='caret right' /></b></span>
            <span>{cardInfo.borders.toString()}</span>
          </div>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name='clock' /> Time Zone(s): {cardInfo.timezones.toString()}
      </Card.Content>
    </Card >
  </Container>
)

export default CountryCard;