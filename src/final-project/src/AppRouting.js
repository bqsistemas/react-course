import './App.css';
import { useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Link, Navigate  } from 'react-router-dom'
// components
import TasksPage from './pages/tasks/TasksPage';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/errors/NotFoundPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';
import LoginPage from './pages/auth/LoginPage';

function AppRouting() {

  const logged = localStorage.getItem('credentials')
  // useEffect(() => {
  //   logged = localStorage.getItem('credentials')
  //   console.log('credentials', logged)
  // }, []);

  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to='/'>Home | </Link>
            <Link to='/signin'>SignIn | </Link>
          </aside>
          <main>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/signin' element={
                logged ? 
                <Navigate to="/" />
                :
                <LoginPage/>
              }/>
              <Route path='/tasks' element={<TasksPage/>}/>
              <Route exact path='/tasks/:id' element={<TaskDetailPage/>}/>
              <Route exact path='/profile' element={
                  logged ? 
                  <ProfilePage/>
                  :
                  <Navigate to="/signin" />
              }/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRouting;
