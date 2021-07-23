import React, {useState, useEffect} from 'react'
import { db } from "../../App";
import { deleteData } from '../Firebase/api';

function DataFav(props) {
    const [favorites, setFavorites] = useState([]);

    //Obtener toda la colecion de datos de la base de datos
    const getFavorites = async () =>{
        db.collection('data').doc(props.uid).collection('favoritos').onSnapshot(
            (querySnapshot) => {
                const docs = [];
                querySnapshot.forEach((doc) =>{
                    docs.push({...doc.data(), id:doc.id});
                });
                setFavorites(docs);
            });
    };

    //Metodo para eliminar un producto
    const DeleteFavorite = async (id) =>{
        if(window.confirm('¿Estás seguro de eliminar de favoritos?')){
            await deleteData(props.uid, id)
        }
    };

    useEffect(()=>{
        getFavorites()
    }, [])

    return (
        <table className="o-table">
            <thead>
                <tr className="o-table-head">
                    <th className="o-th">Id</th>
                    <th className="o-th">Titulo</th>
                    <th className="o-th">Descripción</th>
                    <th className="o-th">Eliminar de Favoritos</th>
                </tr>
            </thead>
            <tbody>
                { !favorites ? 'Loading...' : 
                    favorites.map((fav)=>{
                        return(
                        <tr
                            hey={fav.id}
                            className="o-tableRow"
                        >
                            <td>{fav.idd}</td>
                            <td>{fav.title}</td>
                            <td className="o-td-body">{fav.body}</td>
                            <td><button className="o-btn-fav o-btn-eliminate" 
                            onClick={() => DeleteFavorite(fav.id)}>Eliminar</button></td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default DataFav
