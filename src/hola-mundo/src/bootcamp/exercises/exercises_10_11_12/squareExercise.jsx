import React, { useState } from 'react';
import PropTypes from 'prop-types';


const SquareExercise = () => {
    const [color, setColor] = useState('black')
    const [changeColorAllowed, setChangeColorAllowed] = useState(true)
    
    function onMouseEnter(){
        const colorR = Math.floor(Math.random() * 255)
        const colorG = Math.floor(Math.random() * 255)
        const colorB = Math.floor(Math.random() * 255)
        setColor(`rgb(${colorR},${colorG},${colorB})`)
    }
    function onMouseLeave(){
        setColor(`black`)

    }

    return (
        <div 
            style={{ width: '255px', height: '255px', backgroundColor: color }}
            onMouseEnter={changeColorAllowed ? onMouseEnter : undefined}
            onMouseLeave={onMouseLeave}
            onDoubleClick={() => setChangeColorAllowed(!changeColorAllowed)}
        >
            
        </div>
    );
};


SquareExercise.propTypes = {

};


export default SquareExercise;
