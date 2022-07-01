import logo from './logo.svg';
import './App.css';

// Components
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Component Gretting */}
        {/* <Greeting name="Jhon"></Greeting> */}
        <GreetingF name="Jhon"></GreetingF>
      </header>
    </div>
  );
}

export default App;
