import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    const { login } = useContext(UserContext);

    console.log(login)

    // Forma que espera para ver se o usuário realmente está logado
    // if (login === true) {
    //     return children;
    // } else if (login === false) {
    //     return <Navigate to="/login" />
    // } else {
    //     return <></>
    // }

    return login ? children : <Navigate to="/login" />;
}

export default ProtectedRoute