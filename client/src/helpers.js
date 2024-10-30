import axios from 'axios'
export const coordinateMapping = {
    "Boston": [42.3601, 71.0589],
}

export const sparkGreen = "#00a896"

export const apiGetCoordinatesByCity = async (currentCity) => {
    try{
      const response = await axios.get(`https://api.api-ninjas.com/v1/geocoding?city=${currentCity}&country=us`, {headers: {'X-Api-Key': 'W3sevg6R4902/IoazpPzZA==eRLj4bhENCiBmeoV'}})
      if (response.status == 200){
        return response.data[0] //get the first option of city the API gives back
      }
      else{
        console.error('Unsuccessful response from city to cooridinates API. Check your city spelling')
      }
    }catch(e){
      console.error("Problem in city to coordinates API", e)
      return 
    }
  }