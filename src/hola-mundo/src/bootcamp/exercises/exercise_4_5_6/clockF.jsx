import React, { useState, useEffect } from 'react';

const ClockF = () => {

    let timerId = null
    const initialData = {
        fecha: new Date(),
        edad: 0,
        nombre: 'Martín',
        apellidos: 'San José'
    }

    const [data, setData] = useState(initialData);

    useEffect(() => {
        timerId = setInterval(() => tick(), 1000)
        return () => {
            clearInterval(timerId);
        };
    }, []);

    // functions
    const tick = () => {
        setData((prev) => {
            let edad = prev.edad +1;
            return {
                ...prev,
                fecha: new Date(),
                edad
            }
        })
     }

    return (
        <div>
            <h2>
            Hora Actual: {data.fecha.toLocaleTimeString()}
            </h2>
            <h3>{data.nombre} {data.apellidos}</h3>
            <h1>Edad: {data.edad}</h1>
        </div>
    );
}

export default ClockF;
