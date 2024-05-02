import sunrise from '../assets/icons/sunrise.svg'
import sunset from '../assets/icons/sunset.svg'
import wind from '../assets/icons/wind.svg'
import drop from '../assets/icons/drop.svg'
import sun from '../assets/icons/sun.svg'
import temperature from '../assets/icons/temperature.svg'
import PropTypes from 'prop-types'
import { useContext } from 'react'
import { MeasureContext } from '../context/MeasureContext'


const WeatherDetails = ({ weather}) => {

  const { measure } = useContext(MeasureContext)

  const details = [
    { name: "Min temperature", value: measure === 'C' ? `${weather.minTempC.toFixed()}°C` : `${weather.minTempF.toFixed()}°F`, icon: temperature },
    { name: "Max temperature", value: measure === 'C' ? `${weather.maxTempC.toFixed()}°C` : `${weather.maxTempF.toFixed()}°F`, icon: temperature },
    { name: "Sunrise", value: weather.sunrise, icon: sunrise },
    { name: "Sunset", value: weather.sunset, icon: sunset },
    { name: "Chance of rain", value: `${weather.chanceOfRain}%`, icon: drop },
    { name: "Wind", value: `${weather.wind} km/h`, icon: wind },
    { name: "UV index", value: `${weather.uv} of 10`, icon: sun },
    { name: "Feels like", value: measure === 'C' ? `${weather.feelsLikeC.toFixed()}°C` : `${weather.feelsLikeF.toFixed()}°F`, icon: temperature },
  ]
  

  return (
    <div className="bg-blue-100 p-2 rounded-lg">
      <h6 className='p-2'>WEATHER DETAILS</h6>
      <div className="grid md:grid-cols-4 sm:grid-cols-2">
        {details.map((d, index) => (
          <div key={index} className="bg-white bg-opacity-32 m-2 p-3 flex justify-between items-center rounded-xl">
            <div>
              <h5>{d.name}</h5>
              <h3>{d.value}</h3>
            </div>
            <img src={d.icon} alt={d.name} className='w-7 h-7' />
          </div>
        ))}
      </div>
    </div>
  )
}

WeatherDetails.propTypes = {
  weather: PropTypes.shape({
    maxTempC: PropTypes.number.isRequired,
    minTempC: PropTypes.number.isRequired,
    maxTempF: PropTypes.number.isRequired,
    minTempF: PropTypes.number.isRequired,
    sunrise: PropTypes.string.isRequired,
    sunset: PropTypes.string.isRequired,
    chanceOfRain: PropTypes.string.isRequired,
    wind: PropTypes.string.isRequired,
    uv: PropTypes.string.isRequired,
    feelsLikeC: PropTypes.number.isRequired,
    feelsLikeF: PropTypes.number.isRequired,
  }).isRequired,
}

export default WeatherDetails
