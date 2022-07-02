import logo from './logo.svg';
import './App.css';

// Components
import Greeting from './components/pure/greeting';
import GreetingF from './components/pure/greetingF';
import ContactListComponent from './components/container/contact_list';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import MyComponentWithContext from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import AllCycles from './hooks/lifecycle/allCycles';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Component Gretting */}
        {/* <Greeting name="Jhon"></Greeting> */}
        {/* <GreetingF name="Jhon"></GreetingF> */}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MyComponentWithContext></MyComponentWithContext> */}
        <Ejemplo4 nombre="Jhon">
          {/* Todo lo que hay aquí, es tratado como un props.children */}
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4>
        {/* <AllCycles></AllCycles> */}
      </header>
    </div>
  );
}

export default App;
