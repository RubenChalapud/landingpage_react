import React, { useEffect, useState } from 'react';
import '../Table/Table.css';
import AgregarFavorito from './AgregarFavorito';
 
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
        <table className="o-table">
            <thead>
                <tr className="o-table-head">
                    <th>Id</th>
                    <th>Titulo</th>
                    <th>Descripción</th>
                    <th>Agregar a Favoritos</th>
                </tr>
            </thead>
            <tbody>
                { !todos ? 'Loading...' : 
                    todos.map((todo, index)=>{
                        return(
                        <tr
                            hey={todo.id}
                            className="o-tableRow"
                        >
                            <td>{todo.id}</td>
                            <td>{todo.title}</td>
                            <td className="o-td-body">{todo.body}</td>
                            <td><AgregarFavorito 
                                id={todo.id}
                                title={todo.title}
                                body={todo.body}
                                >
                                </AgregarFavorito></td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default ListaApi
