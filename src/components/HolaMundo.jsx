import React from 'react';
 
const HolaMundo = () => {

    const Hello = "Hola Mundo"
    const isTrue = true;

    return(
        <div className="holamundo">
            <h1>{Hello}</h1>
            <h2> Curso esencial de React </h2>
            {isTrue ? <h4> Esto es verdadero </h4> : <h4> Esto es falso </h4>}
            {isTrue && <h5>Soy verdadero </h5>}
        </div>
    )
}

export default HolaMundo