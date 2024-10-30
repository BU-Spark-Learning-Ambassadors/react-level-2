import React from 'react';
import { Card, Col, Row } from 'antd';
const { Meta } = Card;
import CloudySunny from '../assets/cloudy-sunny.webp'
import Rainy from '../assets/rainy.jpg'
import SunnyRainy from '../assets/sunny-rainy.webp'
import Sunny from '../assets/sunny.webp'

function WeatherCard({ weatherData, date }) {
  // logic to decide what the cover image should be based on weather
  var src = ''
   if (weatherData.rain > 0){
      if (weatherData.max < 50){
        src = Rainy;
      }
      else{
        src = SunnyRainy;
      }
   }
   else{
    if (weatherData.max < 50){
      src = CloudySunny;
    }
    else{
      src = Sunny;
    }
   }

  return (
    <Card
      hoverable
      style={{
        width: 240,
        marginBottom: '2rem'
      }}
      cover={<img alt="example" src={src} />}
    >
      <Meta title={date} description={`${weatherData.max} / ${weatherData.min}`} />
    </Card>
  );
}

function WeatherCardGrid({ weatherObjects }) {  
  
  // Get dates
  const next7Days = [...Array(7)].map((_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Format them
  const dates = next7Days.map(date => 
    date.toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric'
    })
  );
  

  return (
    <div>
      {/* Map over the data and render the weather as Cards */}
      <Row style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '6rem', marginTop: '3rem', width: '100vw'}}>
      {Array.isArray(weatherObjects) && weatherObjects.length > 0 ? (

        // TO DO: Map over the weatherObjects and create WeatherCards (Defined for you above)
        // use <Col span={6}> to divide them into a properly spaced grid
        // Resources: https://ant.design/components/grid, 
        // https://react.dev/reference/react/Children#children-map-parameters
       <>You need to fix WeatherCardGrid.jsx</>
      ) : (
        <p>No weather data available</p> 
      )}
      </Row>
    </div>
  );
}

export default WeatherCardGrid;
