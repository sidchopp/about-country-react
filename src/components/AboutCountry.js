import React, { useState, useEffect } from 'react'

import CountryCard from './CountryCard';
import NeighbourCard from './NeighbourCard';

function AboutCountry() {

  const [location, setLocation] = useState([]);
  const [myCity, setMyCity] = useState('');

  // Promisifying the Geolocation API
  const getPosition = function () {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
  };

  const whereAmI = async function () {
    const pos = await getPosition();
    //console.log('value of my position:', pos);

    const { latitude: lat, longitude: lng } = pos.coords;
    //console.log('My position:', lat, lng);

    const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
    if (!responseGeo.ok) throw new Error("Problem getting location data")
    const dataGeo = await responseGeo.json();
    //console.log('Response from dataGeo:', dataGeo);

    const response = await fetch(`https://restcountries.eu/rest/v2/name/${dataGeo.country}?fullText=true`);
    if (!response.ok) throw new Error("Problem getting country")
    //console.log(response);
    const data = await response.json();
    console.log(data);

    setLocation(data)



    const city = `You are in ${dataGeo.city}, ${dataGeo.country}`;
    console.log(city);
    //return city;
    setMyCity(city)


  }

  useEffect(() => {
    whereAmI();
  }, [])

  const mapLocation = location.map((country) => {
    return (
      <>
        <CountryCard key={country.name} cardInfo={country} />

      </>
    )
  })

  return (
    <div>
      <h1>{myCity}</h1>
      {mapLocation}
    </div>
  )
}

export default AboutCountry
