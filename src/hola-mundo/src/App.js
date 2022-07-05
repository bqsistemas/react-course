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
import GreetingStyled from './components/pure/greetingStyled';
import ClockF from './bootcamp/exercises/exercise_4_5_6/clockF';
import Father from './components/container/father';
import ContactListExerciseComponent from './bootcamp/exercises/exercise_7_8_9/contactListExercise';
import OptionalRender from './components/pure/optionalRender';
import SquareExercise from './bootcamp/exercises/exercises_10_11_12/squareExercise';
import AsyncExample from './bootcamp/examples/AsyncExample';
import ObservableExample from './bootcamp/examples/ObservableExample';

function App() {
  return (
    <div className="App">
        {/* Component Gretting */}
        {/* <Greeting name="Jhon"></Greeting> */}
        {/* <GreetingF name="Jhon"></GreetingF> */}
        {/* <ContactListComponent></ContactListComponent> */}
        {/* Ejemplos de uso de HOOKS */}
        {/* <Ejemplo1></Ejemplo1> */}
        {/* <Ejemplo2></Ejemplo2> */}
        {/* <MyComponentWithContext></MyComponentWithContext> */}
        {/* <Ejemplo4 nombre="Jhon"> */}
          {/* Todo lo que hay aquí, es tratado como un props.children */}
          {/* <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <AllCycles></AllCycles> */}
        {/* <GreetingStyled name="Jhon"></GreetingStyled> */}
        {/* <ClockF></ClockF> */}
        {/* <Father></Father> */}
        {/* <ContactListExerciseComponent></ContactListExerciseComponent> */}
        {/* <OptionalRender></OptionalRender> */}
        {/* <SquareExercise></SquareExercise> */}
        {/* <AsyncExample></AsyncExample> */}
        <ObservableExample></ObservableExample>
    </div>
  );
}

export default App;
