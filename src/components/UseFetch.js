import { useState, useEffect } from 'react';

export const useFetch = (url) => {
  //States
  const [location, setLocation] = useState([]);
  const [myCity, setMyCity] = useState('');
  const [loading, setLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [searchCountry, setSearchCountry] = useState('');


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
      // For all countries' Cards
      const responseAll = await fetch(url);
      if (!responseAll.ok) throw new Error("Problem getting country")
      const dataAll = await responseAll.json();
      // console.log('Data:', dataAll);
      //Updating with All countries
      setAllCountries(dataAll);

      // Geo Location
      const pos = await getPosition();
      // changing the names by de structuring the pos object that we receive
      const { latitude: lat, longitude: lng } = pos.coords;
      // Reverse geocoding(i.e  converting a location as described by geographic coordinates (latitude, longitude) to a human-readable address or place) 
      // const responseGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
      const responseGeo = await fetch(`https://us1.locationiq.com/v1/reverse.php?key=pk.54613f9762655306fcea44c566aadc1c&lat=${lat}&lon=${lng}&format=json`)
      //console.log(responseGeo);
      if (!responseGeo.ok) throw new Error("Problem getting location data")
      const dataGeo = await responseGeo.json();
      // console.log('Response from dataGeo:', dataGeo);

      // To show the city of user
      const city = `${dataGeo.display_name}`

      // Country data we receive directly from dataGeo
      const response = await fetch(`https://restcountries.com/v3/name/${dataGeo.address.country}?fullText=true`);

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
      speak(`Hi there, you are at ${city}`)

      //Updating the myCity state with present city of user
      setMyCity(city)
    } catch (err) {
      // if there is error we want to stop loading
      setLoading(false)
      // console.log('This is the error:', err.message);

      const error = `ERROR: "${err.message}". Please allow the site to access your location and refresh the page. ????`;
      setErrorMessage(error);
    }
  }

  useEffect(() => {
    whereAmI();
  }, [url]);
  return { location, myCity, loading, errorMessage, allCountries, searchCountry, setSearchCountry }
};
