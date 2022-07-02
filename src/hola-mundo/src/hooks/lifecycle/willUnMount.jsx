/**
 * Ejemplo de uso de método componentWillUnMount para componente clase
 * y ejemplo de uso de hook para componente funcional
 * !(Cuando el componente va a desaparecer)
 */

import React, { Component, useEffect } from 'react';

export class WillUnMount extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca')
    }

    render() {
        return (
            <div>
                <h1>WillUnMount</h1>
            </div>
        );
    }
}

export const WillUnMountHook = () => {

    useEffect(() => {
        // aquí no ponemos nada
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca')
        };
    }, []); // sólo se ejecutará una vez, cuándo se desmonte el componente

    return (
        <div>
            <h1>WillUnMount</h1>
        </div>
    );
}
