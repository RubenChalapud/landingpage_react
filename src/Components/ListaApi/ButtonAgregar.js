import React, { useState } from 'react';
import { createData } from '../Firebase/api';

function ButtonAgregar(props) {
    //Valores
    const Values = {
        idd: props.id,
        title: props.title,
        body: props.body
    }

    const [values] = useState(Values);

    const Task = async (valueObject) =>{
        await createData(valueObject, props.uid);
        alert('Se agregó a Favoritos');
    }

    const handleClick = (e) =>{
        Task(values);
    }

    return (
        <button className="o-btn-fav" onClick={() => handleClick()}>Agregar</button>
    )
}

export default ButtonAgregar
