import sunrise from '../assetsWeather/icons/sunrise.svg'
import sunset from '../assetsWeather/icons/sunset.svg'
import wind from '../assetsWeather/icons/wind.svg'
import drop from '../assetsWeather/icons/drop.svg'
import sun from '../assetsWeather/icons/sun.svg'
import temperature from '../assetsWeather/icons/temperature.svg'



const WeatherDetails = () => {

    const details=[
        {name: "Max temperature", value: "20°", icon:temperature},
        {name: "Min temperature", value: "10°", icon:temperature},
        {name: "Sunrise", value: "06:00", icon:sunrise},
        {name: "Sunset", value: "18:00", icon:sunset},
        {name: "Chance of rain", value: "10%", icon:drop},
        {name: "Wind", value: "5.1 km/h", icon:wind},
        {name: "UV index", value: "2 of 10", icon:sun},
        {name: "Fells like", value: "12°", icon:temperature},
    ]
  return (
    <div
        className="bg-blue-100 p-2  rounded-lg"
    >
        <h6
            className='p-2'
        >
            WEATHER DETAILS
        </h6>
        <div className="grid grid-cols-4">
            {details.map((d, index) => (
                <div
                    key={index}
                    className="bg-white bg-opacity-32 m-2 p-3 flex justify-between items-center rounded-xl"
                >
                    <div>
                        <h5>{d.name}</h5>
                        <h3>{d.value}</h3>
                    </div>
                    <img src={d.icon} alt={d.name} 
                        className='w-7 h-7'
                    />
                </div>
            ))}
        </div>

    </div>
  )
}

export default WeatherDetails