/**
 * Ejemplo de uso del Hook useState
 * Crear un componente de tipo función y acceder a su estado privado
 * a través de un hook y, además, poder modificarlo
 */

import React, { useState } from 'react';

const Ejemplo1 = () => {

    // valor inicial para un contador
    const valorInicial = 0

    // valor inicial para una persona
    const personaInicial = {
        nombre: 'Jhon',
        email: 'bqsistemas@gmail.com'
    }

    /**
     * Queremos que el VALORINICIAL y PERSONAINICIAL sean 
     * parte del estado del componente para así poder gestionar su cambio
     * y que éste se vea reflejado en la vsta del compnente
     * 
     * const [nombreVariable, funcionParaCambiar] = useState(valorInicial)
    */

    const [contador, setContador] = useState(valorInicial)
    const [persona, setPersona] = useState(personaInicial)

    /**
     * Función para actualizar el estado privado que contiene el contador
     */
    const incrementarContador = () => {
        // ? funcionParaCambiar(nuevoValor)
        setContador(contador + 1)
    }
    
    /**
     * Función para actualizar el estado de persona en el componente
     */
    const actualizarPersona = () => {
        setPersona(
            {
                nombre: 'Anthony',
                email: 'jabarrantes@pucp.edu.pe'
            }
        )
    }

    return (
        <div>
            <h1>*** Ejemplo de useState() ***</h1>
            <h2>Contador: { contador }</h2>
            <h2>Datos de la persona: </h2>
            <h3>Nombre: { persona.nombre }</h3>
            <h3>Email: { persona.email }</h3>
            {/* Bloque de botones para actualizar el estado del componente */}
            <div>
                <button onClick={incrementarContador}>Incrementar contador</button>
                <button onClick={actualizarPersona}>ActualizarPersona</button>
            </div>
        </div>
    );
}

export default Ejemplo1;
