import PropTypes from 'prop-types'
import { useContext, useRef, useEffect, useState } from 'react'
import { MeasureContext } from '../context/MeasureContext'
import leftArrow from '../assets/icons/arrowLeft.svg'
import rightArrow from '../assets/icons/arrowRight.svg'

const WeatherHours = ({ weather }) => {
  const { measure } = useContext(MeasureContext)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const hoursContainerRef = useRef(null)

  useEffect(() => {
    const container = hoursContainerRef.current

    const handleScroll = () => {
      setShowLeftArrow(container.scrollLeft > 0)

      setShowRightArrow(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      )
    }

    container.addEventListener('scroll', handleScroll)

    return () => {
      container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const scrollLeft = () => {
    hoursContainerRef.current.scrollBy({
      left: -500,
      behavior: 'smooth',
    })
  }

  const scrollRight = () => {
    hoursContainerRef.current.scrollBy({
      left: 500,
      behavior: 'smooth',
    })
  }

  const renderTemperature = (hour) => {
    if (measure === 'C') {
      return `${hour.tempC.toFixed()}°C`
    } else if (measure === 'F') {
      return `${hour.tempF.toFixed()}°F`
    }
    return `${hour.tempC.toFixed()}°C`
  }

  return (
    <div className="bg-blue-100 p-2 rounded-lg mb-5 relative">
      <h6 className="p-2">TODAY’S FORECAST</h6>
      <div className="relative overflow-hidden">
        <div
          ref={hoursContainerRef}
          className="hours-container flex gap-2 py-2 overflow-x-hidden overflow-y-hidden"
        >
          {weather.map((hour, index) => (
            <div key={index} className="bg-white py-2 px-4 flex flex-col items-center justify-center rounded-lg">
              <p className="text-sm">{hour.time.split(' ')[1]}</p>
              <img src={hour.icon} alt={hour.condition} className="w-10 h-10" />
              <p className="text-sm">{renderTemperature(hour)}</p>
            </div>
          ))}
        </div>
        {showLeftArrow && (
          <button
            className="scroll-arrow left-0 absolute top-0 bottom-0  bg-blue-300 bg-opacity-90 rounded-md my-2 px-1"
            onClick={scrollLeft}
          >
            <img src={leftArrow} alt="" className="w-8" />
          </button>
        )}
        {showRightArrow && (
          <button
            className="scroll-arrow right-0 absolute top-0 bottom-0  bg-blue-300 bg-opacity-90 rounded-md my-2 px-1"
            onClick={scrollRight}
          >
            <img src={rightArrow} alt="" className="w-8" />
          </button>
        )}
      </div>
    </div>
  )
}

WeatherHours.propTypes = {
  weather: PropTypes.array.isRequired,
}

export default WeatherHours
