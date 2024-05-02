import axios from 'axios'
const LOCATION_API_KEY = import.meta.env.VITE_LOCATION_API_KEY


const fetchCityFromGeolocation = async (onCityChange) => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords

        try {
          const response = await axios.get(
            `https://api.opencagedata.com/geocode/v1/json?key=${LOCATION_API_KEY}&language=en&pretty=1&q=${latitude}+${longitude}`
          )

          if (response.data && response.data.results && response.data.results.length > 0) {
            const cityName = response.data.results[0].components.city || response.data.results[0].components.town
            onCityChange(cityName)
          }
        } catch (error) {
          console.error('Error fetching city from geolocation:', error)
        }
      },
      (error) => {
        console.error('Error getting geolocation:', error)
      }
    )
  } else {
    console.error('Geolocation is not supported by this browser.')
  }
}

export default fetchCityFromGeolocation