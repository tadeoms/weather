import locationIcon from '../../assets/icons/location.svg'
import  fetchCityFromGeolocation from '../../api/locationApi'

const LocationButton = ({ onCityChange }) => {

  const handleLocationClick = () => {
    fetchCityFromGeolocation(onCityChange)
  }

  return (
    <div>
      <button onClick={handleLocationClick} className="text-blue-500 font-bold">
        <img src={locationIcon} alt="Location Icon" className="w-10 h-10" />
      </button>
    </div>
  )
}

export default LocationButton
