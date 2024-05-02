import Search from "./Search"
import LocationButton from "./LocationButton"
import MeasureButton from "./MeasureButton"
import PropTypes from 'prop-types'

const Header = ({ onCityChange}) => {
  return (
    <div className='flex justify-between items-center mt-4 mb-10  gap-12'>
      <h4>Weather App</h4>
      <Search onCityChange={onCityChange} />
      <LocationButton onCityChange={onCityChange}/>
      <MeasureButton/>
    </div>
  )
}


Header.propTypes = {
  onCityChange: PropTypes.func.isRequired,
}

export default Header
