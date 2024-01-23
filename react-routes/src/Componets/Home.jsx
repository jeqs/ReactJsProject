import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

const Home = () => {

    const [equipo, setEquipo] = React.useState([]);

    const obtenerDataApi = async () => {
        await fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(users => {
            //console.log(json)
            setEquipo(users)
        })
    }

    useEffect(() => {
        //console.log(data)
        obtenerDataApi();
    }, [])

    return ( 
        <div>
            <h1>Home</h1>
            <ul>
                {
                    equipo.map(item => (
                        <li key={item.id}>
                            <Link to={`users/${item.id}`}>
                                {item.title}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
     );
}
 
export default Home;