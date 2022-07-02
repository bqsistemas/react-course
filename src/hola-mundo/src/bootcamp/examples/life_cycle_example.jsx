/**
 * Ejemplo de componente de tipo clase que dispone de los
 * métodos de ciclo de vida
 */

import React, { Component } from 'react';

class LifeCycleExample extends Component {

    constructor(props){
        super(props)
        console.log('CONSTRUCTOR: Cuándo se instancia el componente')
    }

    componentWillMount() {
        console.log('WILLMOUNT: Antes del montaje del componente')
    }

    /**
     * Aquí es dónde se deben realizar peticiones
     */
    componentDidMount(){
        console.log('DIDMOUNT: Justo al del montaje del componente, antes de renderizarlo')
    }

    componentWillReceiveProps(nextProps) {
        console.log('WILLRECEIVEPROPS: Si va a recibir nuevas props')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('SHOULDCOMPONENTUPDATE: Controlar si el componente debe o no actualizarse')
        return true // o false (devuelve un booleano)
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('WILLUPDATE: Justo antes de actualizarse')
    }

    componentDidUpdate() {
        console.log('DIDUPDATE: Justo después de actualizarse')
    }

    componentWillUnmount() {
        console.log('WILLUNMOUNT: Justo antes de desaparecer')
    }

    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LifeCycleExample;
