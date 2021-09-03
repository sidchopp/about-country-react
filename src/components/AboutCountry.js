import React, { useState, useEffect } from 'react'

// components
import CountryCard from './CountryCard';
import Loading from './Loading';

function AboutCountry() {

  const [location, setLocation] = useState([]);
  const [myCity, setMyCity] = useState('');
  const [loading, setLoading] = useState(true);

  // Promisifying the Geolocation API
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const whereAmI = async function () {

    // to make sure loading is true when we are fetching data
    setLoading(true);

    try {

      // Geo Location
      const pos = await getPosition();

      // changing the names by de structuring the pos object that we receive
      const { latitude: lat, longitude: lng } = pos.coords;

      // Reverse geocoding(i.e  converting a location as described by geographic coordinates (latitude, longitude) to a human-readable address or place) 
      const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      if (!responseGeo.ok) throw new Error("Problem getting location data")
      const dataGeo = await responseGeo.json();
      //console.log('Response from dataGeo:', dataGeo);

      // Country data we receive directly from dataGeo
      const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}?fullText=true`);

      // to handle error in fetch call. If there is error, it won't run further after this line below
      if (!response.ok) throw new Error("Problem getting country")
      //console.log(response);
      const data = await response.json();
      //console.log(data);

      // after getting our data, we want loading to stop
      setLoading(false)

      // Updating our  location state with data
      setLocation(data)

      // To show the city of user
      const city = `At present you are in ${dataGeo.city}, ${dataGeo.country}`;
      console.log(city);

      //Updating the myCity state with present city of user
      setMyCity(city)

    } catch (err) {
      // if there is error we want to stop loading
      setLoading(false)
      console.log('This is the error:', err.message);
    }
  }

  useEffect(() => {
    whereAmI();
  }, [])

  const mapLocation = location.map((country) => {
    return <CountryCard key={country.name} cardInfo={country} cardCity={myCity} />
  })

  // if data is not fetched,show loader
  if (loading) {
    return (
      <Loading />
    )
  }

  return (
    <div>
      {mapLocation}
    </div>
  )
}

export default AboutCountry;
