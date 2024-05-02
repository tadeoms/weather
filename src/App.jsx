import './App.css'
import { useEffect, useState } from 'react'
import getFormattedWeatherData from './api/weatherApi'
import Header from './components/header/Header'
import WeatherDay from './components/WeatherDay'
import WeatherHours from './components/WeatherHours'
import WeatherDetails from './components/WeatherDetails'
import { MeasureProvider } from './context/MeasureContext'

function App() {

  const [city, setCity] = useState('argentina')
  const [weatherData, setWeatherData] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const data = await getFormattedWeatherData(city)
        setWeatherData(data)
      } catch (error) {
        console.error('Error al obtener datos del clima:', error.message)
      }
    }
    fetchWeather()
  }, [city])

  const handleCityChange = (newCity) => {
    setCity(newCity)
  }

  return (
    <> 
      <MeasureProvider>
        {weatherData && (
          <div className=' sm:mx-10 md:mx-20 lg:mx-40 my-6'>
            <Header onCityChange={handleCityChange}   />
            <WeatherDay weather={weatherData.formattedWeatherData} />
            <WeatherHours weather={weatherData.forecastWeatherData} />
            <WeatherDetails weather={weatherData.formattedWeatherData} />
          </div>
        )}
      </MeasureProvider>
    </>
  )
}

export default App
