import React, { useEffect, useState } from 'react'

function ListaApi() {
    const url= "https://waco-api.herokuapp.com/api/posts";
    const [todos, setTodos] = useState()
    const fetchApi = async () => {
        const responce = await fetch(url)
        const responseJSON = await responce.json()
        setTodos(responseJSON.data);
        console.log(responseJSON.data);
    }

    useEffect(()=>{
        fetchApi()
    }, [])

    return (
        <div>
            <ul>
                { !todos ? 'Cargando...' : 
                    todos.map( (todo, index ) => {
                    return <li>{todo.title}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ListaApi
