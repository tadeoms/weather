import { useState, useEffect } from 'react'
import fetchCities  from '../../api/searchApi'

const Search = ({ onCityChange }) => {

  const [inputValue, setInputValue] = useState('')
  const [cities, setCities] = useState([])
  const [selectedCity, setSelectedCity] = useState(null)

  useEffect(() => {
    const fetchCitiesData = async () => {
      if (inputValue.trim() !== '') {
        const data = await fetchCities(inputValue)
        setCities(data)
      } else {
        setCities([])
      }
    }

    fetchCitiesData()
  }, [inputValue])

  const handleCitySelection = (city) => {
    setSelectedCity(city)
    onCityChange(city.name)
    setInputValue('')
  }

  return (
    <div className='w-full'>
      <input 
        type="text" 
        placeholder="Search for cities"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className='border rounded-md py-2 px-5 bg-blue-100 w-full focus:outline-none focus:border-blue-600 focus:border-2 focus:placeholder:text-transparent'
      />
      {cities.length > 0 && (
        <div className="mt-2 absolute">
          <ul className="border rounded-md bg-white shadow-md max-h-40 w-full overflow-y-auto">
            {cities.map((city) => (
              <li 
                key={city.id} 
                onClick={() => handleCitySelection(city)}
                className="cursor-pointer p-2 w-full hover:bg-gray-100"
              >
                {city.name}, {city.country}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Search
