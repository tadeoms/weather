const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const WEATHER_API_URL = 'https://api.weatherapi.com/v1/forecast.json?'

const fetchWeatherData = async (city) => {
    try {
        const response = await fetch(`${WEATHER_API_URL}key=${WEATHER_API_KEY}&q=${city}`)
        if (!response.ok) {
            throw new Error('Request to the API failed')
        }
        const data = await response.json()
        if (data.error) {
            throw new Error('No data found for the specified city')
        }
        return data
    } catch (error) {
        console.error('Error fetching weather forecast:', error.message)
        throw error
    }
}

const formatCurrentWeather = (data) => {
    try {
        const {
            location: { name },
            current: { 
                feelslike_c,
                feelslike_f,
                condition: { text, icon },
                temp_c,
                temp_f,
                wind_kph,
            },
            forecast: {
                forecastday: [{
                    astro: { sunrise, sunset },
                    date,
                    day: {
                        daily_chance_of_rain,
                        uv,
                        maxtemp_c,
                        maxtemp_f,
                        mintemp_c,
                        mintemp_f
                    }
                }]
            }
        } = data

        return {
            city: name,
            date,
            tempC: temp_c,
            tempF: temp_f,
            sunrise,
            sunset,
            chanceOfRain: daily_chance_of_rain,
            wind: wind_kph,
            uv,
            maxTempC: maxtemp_c,
            maxTempF: maxtemp_f,
            minTempC: mintemp_c,
            minTempF: mintemp_f,
            feelsLikeC: feelslike_c,
            feelsLikeF: feelslike_f,

            condition: {
                text,
                icon
            }
        }
    } catch (error) {
        console.error('Error formatting weather forecast data:', error.message)
        throw error
    }
}

const formatForecastWeather = (data) => {
    try {
        const daily = data.forecast.forecastday[0].hour.map((h) => {
            return {
                condition: h.condition.text,
                icon: h.condition.icon,
                time: h.time,
                tempC: h.temp_c,
                tempF: h.temp_f,
            }
        })
        return daily
    } catch (error) {
        console.error('Error formatting weather forecast data:', error.message)
        throw error
    }
}

const getFormattedWeatherData = async (city) => {
    try {
        const weatherData = await fetchWeatherData(city)
        const formattedWeatherData = formatCurrentWeather(weatherData)
        const forecastWeatherData = formatForecastWeather(weatherData)
        return { formattedWeatherData, forecastWeatherData }
    } catch (error) {
        console.error('Error fetching or formatting weather forecast:', error.message)
        throw error
    }
}

export default getFormattedWeatherData
