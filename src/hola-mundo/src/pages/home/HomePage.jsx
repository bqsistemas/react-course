import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate  } from 'react-router-dom'

function HomePage(props) {

  const location = useLocation()
  const navigate = useNavigate()

  const goToNavigate = (path) => {
      navigate(path, { replace: false })
  }

  const goBack = () => {
      navigate(-1)
  }

  const goForward = () => {
      navigate(1)
  }
  return (
    <div>
      <h1>Home Page</h1>
      <div>
          <button onClick={() => goToNavigate('/profile')}>Go to Profile</button>
      </div>
    </div>
  )
}

HomePage.propTypes = {}

export default HomePage
