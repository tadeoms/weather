import './App.css'
import Header from './components/Header'
import WeatherDay from './components/WeatherDay'
import WeatherDetails from './components/WeatherDetails'
import WeatherHours from './components/WeatherHours'

function App() {

  return (

    <div className=' mx-40 my-6'>
      <Header/>
      <WeatherDay />
      <WeatherHours />
      <WeatherDetails />
    </div>
    
  )
}

export default App
