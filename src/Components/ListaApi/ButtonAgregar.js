import React, { useState } from 'react';
import { createData } from '../Firebase/api';
import swal from 'sweetalert';

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
        swal({
            text: 'Se agregó a Favoritos',
            icon:"success",
            buttons: "Aceptar"
    });
    }

    const handleClick = (e) =>{
        Task(values);
    }

    return (
        <button className="o-btn-fav" onClick={() => handleClick()}>Agregar</button>
    )
}

export default ButtonAgregar
