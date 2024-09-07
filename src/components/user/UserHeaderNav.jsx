import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

// Solução para o problema do SVG com Vite: https://stackoverflow.com/questions/70309561/unable-to-import-svg-with-vite-as-reactcomponent
import MinhasFotos from '../../assets/feed.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../assets/adicionar.svg?react';
import Sair from '../../assets/sair.svg?react';

import styles from './UserHeaderNav.module.css';

const UserHeaderNav = () => {

    const [mobile, setMobile] = useState(null);

    const { userLogout } = useContext(UserContext);

    return (
        <nav className={styles.nav}>
            <NavLink to="/conta" end>
                <MinhasFotos />
                {mobile && "Minhas Fotos"}
            </NavLink>
            <NavLink to="/conta/estatisticas">
                <Estatisticas />
                {mobile && "Estatísticas"}
            </NavLink>
            <NavLink to="/conta/postar">
                <AdicionarFoto />
                {mobile && "Adicionar Foto"}
            </NavLink>
            <button onClick={userLogout}>
                <Sair />
                {mobile && "Sair"}
            </button>
        </nav>
    )
}

export default UserHeaderNav