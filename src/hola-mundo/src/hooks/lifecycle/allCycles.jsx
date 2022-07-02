import React, { useEffect } from 'react';

const AllCycles = () => {

    useEffect(() => {
        console.log('Componente creado')

        let contador = 0
        const intervalId = setInterval(() => {
            document.title = `Nuevo nombre de pestaña ${contador}`
            contador ++
            console.log(`Actualización del componente ${contador}`)
        }, 1000)

        return () => {
            console.log('Comportamiento va a desaparecer')
            document.title = 'Tiempo detenido'
            clearInterval(intervalId)
        };
    }, []);

    return (
        <div>
            <h1>{ document.title }</h1>
        </div>
    );
}

export default AllCycles;
