import React from 'react'
import PropTypes from 'prop-types'
import { useLocation, useNavigate  } from 'react-router-dom'

function NotFoundPage(props) {
  const navigate = useNavigate()
  const goToNavigate = (path) => {
      navigate(path, { replace: false })
  }

  return (
    <div>
      <h1>404 - Not Found Page</h1>
      <div>
          <button onClick={() => goToNavigate('/')}>Go to Home</button>
      </div>
    </div>
  )
}

NotFoundPage.propTypes = {}

export default NotFoundPage
