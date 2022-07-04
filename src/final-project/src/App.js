import './App.css';
// components
import LoginFormComponent from './components/pure/forms/loginForm';
import RegisterFormComponent from './components/pure/forms/registerForm';
import TasksPage from './pages/tasks/TasksPage';

function App() {
  return (
    <div className="App">
      <TasksPage></TasksPage>
      {/* <LoginFormComponent></LoginFormComponent> */}
      {/* <RegisterFormComponent></RegisterFormComponent> */}
    </div>
  );
}

export default App;
