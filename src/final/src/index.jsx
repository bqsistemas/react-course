import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'

// Import de Redux
// import { Provider } from 'react-redux'

// Importamos las hojas de estilos
import 'bootstrap/dist/css/bootstrap.min.css'
// import './styles/index.scss'

// TODO: Si trabajamos con Redux, crear el Store y aplicar el middleware de Redux Saga
ReactDOM.render(
    <React.StrictMode>
        <App></App>
    </React.StrictMode>,
    document.getElementById('root')
)
