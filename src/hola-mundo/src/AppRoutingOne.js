import { BrowserRouter as Router, Route, Routes, Link  } from 'react-router-dom'
import './App.css';
// pages
import NotFoundPage from './pages/errors/NotFoundPage';
import AboutPage from './pages/about-faqs/AboutPage';
import HomePage from './pages/home/HomePage';
import ProfilePage from './pages/profile/ProfilePage';

// Components

function AppRoutingOne() {
  return (
    <div className="App">
      <Router>
        <div>
          <aside>
            <Link to='/'>Home | </Link>
            <Link to='/about'>About | </Link>
            <Link to='/faqs'>Faqs | </Link>
            <Link to='/404'> Not found</Link>
          </aside>
          <main>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/profile' element={<ProfilePage/>}/>
              {["/about", "/faqs"].map((path, index) => 
                <Route path={path} key={index} element={<AboutPage/>}/>
              )}

              <Route path='*' element={<NotFoundPage/>}/>
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default AppRoutingOne;
