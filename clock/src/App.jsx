import './App.css'
import CountDown from './components/CountDown/CountDown'
import DigitalClock from './components/DigitalClock/DigitalClock'
import StopWatch from './components/StopWatch/StopWatch'

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <CountDown />
      <StopWatch />
    </div>
  )
}

export default App
