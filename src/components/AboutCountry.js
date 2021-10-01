import React, { useState, useEffect } from 'react'
//import { Icon } from 'semantic-ui-react'

// components
import CountryCard from './CountryCard';
import Loading from './Loading';

function AboutCountry() {

  const [location, setLocation] = useState([]);
  const [myCity, setMyCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

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
      //console.log(lat, lng);

      // Reverse geocoding(i.e  converting a location as described by geographic coordinates (latitude, longitude) to a human-readable address or place) 
      // const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      const responseGeo = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.54613f9762655306fcea44c566aadc1c&lat=${lat}&lon=${lng}&format=json`)
      //console.log(responseGeo);
      if (!responseGeo.ok) throw new Error("Problem getting location data")
      const dataGeo = await responseGeo.json();
      // console.log('Response from dataGeo:', dataGeo);
      // console.log('Response from dataGeo.address:', dataGeo.address);
      // console.log('Response from dataGeo.address.country:', dataGeo.address.country);

      // To show the city of user

      // const city = `${dataGeo.address.neighbourhood}, ${dataGeo.address.city}. ${dataGeo.address.country}`;
      const city = `${dataGeo.display_name}`
      // console.log(city);


      // Country data we receive directly from dataGeo


      const response = await fetch(`https://restcountries.com/v3/name/${dataGeo.address.country}?fullText=true`);
      // console.log(response);

      // // NEW API
      // const response = await fetch(`https://api.countrylayer.com/v2/name/${dataGeo.address.country}?access_key=7e3bf3e7bce9aef99d58809cd09a3edb&fullText=true`, {
      //   mode: "no-cors"
      // });

      // to handle error in fetch call. If there is error, it won't run further after this line below
      if (!response.ok) throw new Error("Problem getting country")

      const data = await response.json();
      //console.log('Data:', data);

      // after getting our data, we want loading to stop
      setLoading(false)

      // Updating our  location state with data
      setLocation(data)

      // For Voice message to the User
      const speak = (msg) => {
        const sp = new SpeechSynthesisUtterance(msg);
        [sp.voice] = speechSynthesis.getVoices();
        speechSynthesis.speak(sp);
      };

      const speakAddress = `${dataGeo.address.house_number} ${dataGeo.address.road} ${dataGeo.address.neighbourhood} ${dataGeo.address.city}`
      // console.log(speakAddress);

      // speak(`Hello, you are at ${speakAddress}`)

      speak(`Hi there, you are at ${city}`)

      //Updating the myCity state with present city of user
      setMyCity(city)

    } catch (err) {
      // if there is error we want to stop loading
      setLoading(false)
      console.log('This is the error:', err.message);
      const error = `ERROR: "${err.message}". Please allow the site to access your location and refresh the page. 😊`;
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    whereAmI();
  }, [])

  const mapLocation = location.map((country) => {
    // console.log("country is ", country);
    return <CountryCard key={country.name.official} cardInfo={country} cardCity={myCity} />
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
    </div>
  )
}

export default AboutCountry;

