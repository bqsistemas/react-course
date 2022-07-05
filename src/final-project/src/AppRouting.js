import './App.css';
import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom'
// components
import TasksPage from './pages/tasks/TasksPage';
import HomePage from './pages/home/HomePage';
import NotFoundPage from './pages/errors/NotFoundPage';
import ProfilePage from './pages/profile/ProfilePage';
import TaskDetailPage from './pages/tasks/TaskDetailPage';

function AppRouting() {
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to='/'>Home | </Link>
          </aside>
          <main>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route path='/tasks' element={<TasksPage/>}/>
              <Route path='/tasks/:id' element={<TaskDetailPage/>}/>
              <Route exact path='/profile' element={<ProfilePage/>}/>
              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRouting;
