const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY

const fetchCities = async (inputValue) => {
  try {
    const response = await fetch(`https://api.weatherapi.com/v1/search.json?key=${WEATHER_API_KEY}&q=${inputValue}`);
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error fetching cities:', error)
    return []
  }
}

export default fetchCities 
