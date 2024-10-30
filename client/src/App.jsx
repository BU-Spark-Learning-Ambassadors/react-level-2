import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

// Import components
import Navbar from './components/Navbar';
import WeatherCardGrid from './components/WeatherCardGrid';
import { Content } from 'antd/es/layout/layout';
import SearchBar from './components/SearchBar';
import Typography from 'antd/es/typography/Typography';

// Import helpers
import { coordinateMapping } from './helpers';


function App() {
  const [currentCity, setCurrentCity] = useState("Boston");
  const [weatherObjects, setWeatherObjects] = useState()
  const [locationInData, setLocationInData] = useState({country: 'US', state: "Massachusetts", city: "Boston"});

  // takes user input of city and returns the 
  const getCoordinatesByCity = () => {
    try{
      const coordinates = coordinateMapping[currentCity]
      return coordinates
      
    }catch(e){
      console.error("Invalid City Selected")
      setCurrentCity("Boston")
      return []
    }
  }

  // get city coordinates by api
  // TO DO: call a helper function to replace the other method above that is limited (check helpers.js)
  

  useEffect( () =>{
    const getWeather = async () =>{
      
      // dummy way of getting coordinates
      const coordinates = getCoordinatesByCity(currentCity)

      // TO DO: uncomment this and comment out the line above once you have hooked up / imported the correct function
      // const response = await apiGetCoordinatesByCity()
      // var coordinates = []
      // try{
      //   coordinates = [response.latitude, response.longitude]
      //   setLocationInData({country: response.country, state: response.state ? response.state : "NA", city: response.name})
      // }catch(e){
      //   alert("Invalid City Name")
      //   return
      // }
      
      // get weather by coordinates and set state variables
      axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${coordinates[0]}&longitude=${coordinates[1]}&daily=weather_code,temperature_2m_max,temperature_2m_min,rain_sum&timezone=America%2FNew_York&temperature_unit=fahrenheit`)
      .then(response => {(response.data);
        // save all 7 days in weather objects
        var objects = []
        for (var i =0; i < response.data.daily.temperature_2m_max.length; i++){
          const object = {max: response.data.daily.temperature_2m_max[i], 
                          min: response.data.daily.temperature_2m_min[i], 
                          rain: response.data.daily.rain_sum[i]}
          objects.push(object)
        }
        setWeatherObjects(objects)
      })
    }
    getWeather()
  },[currentCity])


 return (
  <div style={{ width: '100vw'}}>
    <Navbar/>
    
    <Content style={{width: '100vw', display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <Typography.Title> 7 Day Forecast</Typography.Title>
      <Typography.Text style={{marginTop: '-1rem', marginBottom: '1rem'}}>{locationInData.city}, {locationInData.state != "NA" ? `${locationInData.state},` : ""} {locationInData.country}</Typography.Text>
      <SearchBar setCurrentCity={setCurrentCity}/>

      {/* render cards */}
    {weatherObjects ?<WeatherCardGrid weatherObjects={weatherObjects}/>
    :<div>...</div>}

    </Content>
   
  </div>
 )
}

export default App
