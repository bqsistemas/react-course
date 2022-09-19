import React, { memo, useState } from 'react'

export default function Ejemplo() {

    const names = [
        'Martín',
        'Eric'
    ]

    const [name, setName] = useState('')

    const getName = () => {
        const random = Math.floor(Math.random() * (names.length - 1))
        return names[random]
    }

    const clearName = () => {
        setName('')
    }

    const obtainName = () => {
        setName(getName())
    }

    return (
        <div>
            <h1>Ejemplo de uso de React Memo</h1>
            <Nombresaleatorios name={name} clearName={clearName}></Nombresaleatorios>
            <button onClick={obtainName}>Generar nombre</button>
        </div>
    )
}

export const NameComponent = (props) => {

    console.log('Renderizando de nuevo')

    return (
        <div>
            <h2>
                {props.name}
            </h2>
            <button onClick={() => props.clearName()}>Borrar Nombre</button>
        </div>
    )
}

function namesAreEqual(prevProps, nextProps) {
    return prevProps.name !== nextProps.name
}

export const Nombresaleatorios = memo(NameComponent, namesAreEqual)