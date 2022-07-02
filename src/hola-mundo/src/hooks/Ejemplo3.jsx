/**
 * Ejemplo de uso de: 
 * - useState()
 * - useContext()
 */

import React, { useState, useContext } from 'react';

/**
 * 
 * @returns Componente 1 
 * Dispone de un contexto que va a tener un valor
 * que recibe desde el padre
 */

const MyContext = React.createContext(null)

const Componente1 = () => {

    // Inicializamos un estado vacío que va a rellenarse con los
    // datos del contexto del padre
    const state = useContext(MyContext)

    return (
        <div>
            <h1>El token es: { state.token }</h1>
            {/* Pintamos el componente 2 */}
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    const state = useContext(MyContext)

    return (
        <div>
            <h2>La sesión es: { state.session }</h2>
        </div>
    );
}

export default function MyComponentWithContext() {

  const estadoInicial = {
    token: '1234567',
    session: 1
  }

  // Creamos el estado de este componente
  const [sessionData, setSessionData] = useState(estadoInicial);

  const actualizarSesion = () => {
    setSessionData(
        {
            token: 'JWT1232456789',
            session: sessionData.session + 1
        }
    )
  }

  return (
    <MyContext.Provider value={sessionData}>
    {/** Todo lo que esté aquí dentro puede leer los datos de sessioData */}
    {/** Además si se actualiza, los componentes de aquí, también lo actualizan*/}
    <h1>**** Ejemplo de useState() y useContext() ****</h1>
    <Componente1></Componente1>
    <button onClick={actualizarSesion}>Actualizar sesión</button>
    </MyContext.Provider>
  )
}

