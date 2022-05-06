import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';

const Home = () => {
    const { logout} = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    }

    return(
    <>
    <h1>Home Page</h1> 
    <button onClick={handleLogout}>Sair</button>
    </>
    )
};

export default Home;