import PropTypes from 'prop-types'
import { useContext } from 'react'
import { MeasureContext } from '../context/MeasureContext'

const WeatherDay = ({ weather }) => {
  
  const { measure } = useContext(MeasureContext)
  
  const formatDate = (date) => {
    const formattedDate = new Date(date)
    const dayOfWeek = formattedDate.toLocaleDateString('en-US', { weekday: 'long' })
    const month = formattedDate.toLocaleDateString('en-US', { month: 'long' })
    const dayOfMonth = formattedDate.getDate()
    return `${dayOfWeek}, ${month} ${dayOfMonth}`
  }

  const temperature = measure === 'C' ? weather.tempC : weather.tempF

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div>
          <h5>{formatDate(weather.date)}</h5>
          <h2>{weather.city}</h2>
          <h1>{temperature}°</h1>
        </div>
          <img src={weather.condition.icon} alt={weather.condition.text} className="w-28" />
      </div>
    </>
  )
}

WeatherDay.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    tempC: PropTypes.number.isRequired,
    tempF: PropTypes.number.isRequired,
    date: PropTypes.number.isRequired,
    condition: PropTypes.shape({
      text: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default WeatherDay
