import React, {useEffect}  from 'react';
import {useParams} from 'react-router-dom'

const Users = () => {

    const [equipo, setEquipo] = React.useState([]);
    
    const {id} = useParams();

    useEffect(() => {
        const obtenerDataApi = async () => {
            await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
            .then(response => response.json())
            .then(users => {
                //console.log(users)
                setEquipo(users)
            })
        }
        obtenerDataApi();
    }, [id])
    
    return ( 
        <div>
        <h1>User</h1>
        <h2>{ equipo.title } </h2>
    </div>
     );
}
 
export default Users;