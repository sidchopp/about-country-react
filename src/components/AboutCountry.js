import { Card, Segment, Header, Icon, Divider } from 'semantic-ui-react'

// Components
import { useFetch } from './UseFetch';
import CountryCard from './CountryCard';
import Loading from './Loading';
import AllCountriesCards from './AllCountriesCards';
import SearchByCountryName from './SearchByCountryName';

const url = 'https://restcountries.com/v2/all'

function AboutCountry() {

  const { loading, location, myCity, errorMessage, allCountries, searchCountry, setSearchCountry } = useFetch(url)

  const mapLocation = location.map((country) => {
    // console.log("country is ", country);
    return <CountryCard key={country.name.official} cardInfo={country} cardCity={myCity} />
  })

  const mapAllCountries = allCountries
    .filter((val) => {
      if (searchCountry === "") {
        return val;
      } else if (val.name.toLowerCase().includes(searchCountry.toLowerCase())) {
        return val;
      }
      // to remover error "Array.prototype.filter() expects a value to be returned at the end of arrow function"
      return false;
    })
    .map((country) => {
      // return console.log(country.name);
      return <AllCountriesCards key={country.name} allCountries={country} />
    })

  // if data is not fetched,show loader
  if (loading) {
    return (
      <Loading />
    )
  }
  return (
    <div>
      {/* Conditional rendering of error and Location */}
      {errorMessage ? errorMessage : mapLocation}
      <Divider horizontal>Want to explore more ?</Divider>
      <Header> <Icon name="angle double down" /></Header>
      <Segment style={{ margin: '30px' }} padded raised  >
        <Header as='h4' >
          <SearchByCountryName setSearchCountry={setSearchCountry} />
        </Header>
      </Segment>
      <Card.Group centered> {mapAllCountries}</Card.Group>
    </div>
  )
}

export default AboutCountry;

