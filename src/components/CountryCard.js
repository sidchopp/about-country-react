import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const CountryCard = ({ cardInfo }) => (



  <Card>
    {console.log(cardInfo)}
    <Image src={cardInfo.flag} wrapped ui={false} />
    <Card.Content>
      <Card.Header >{cardInfo.name}</Card.Header>
      <Card.Meta>{cardInfo.capital}</Card.Meta>
      <Card.Description>
        <div>Currency: {cardInfo.currencies[0].name}</div>
        <div>Main Language: {cardInfo.languages[0].name}</div>
        <div>Region: {cardInfo.region}</div>
        <div>Population: {+(cardInfo.population / 1000000).toFixed(1)} Million</div>
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        Borders with: {cardInfo.borders}
      </a>
    </Card.Content>
  </Card >
)

export default CountryCard;