import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate  } from 'react-router-dom'
// components
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/errors/NotFoundPage';
import Dashboard from './pages/dashboard/Dashboard';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import TasksPage from './pages/tasks/TasksPage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRouting() {

  // TODO: Change to value from sessionStorage
  let loggedIn = false

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={
          <Navigate to={loggedIn? 'dashboard' : 'signin'} />
        }/>
        <Route exact path='/register' element={<RegisterPage/>}/>
        <Route exact path='/dashboard' element={
          loggedIn? 
          <Dashboard/>
          :
          <Navigate to="/signin" />
        }/>

        <Route exact path='/tasks' element={
          loggedIn? 
          <TasksPage/>
          :
          <Navigate to="/signin" />
        }/>
        <Route exact path='/tasks/:id' element={<TaskDetailPage/>}/>

        
        <Route exact path='/signin' element={
          loggedIn? 
          <Navigate to="/dashboard" />
          :
          <LoginPage/>
        }/>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Router>
  );
}

export default AppRouting;
