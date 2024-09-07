import React, { useContext, useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'

// Solução para o problema do SVG com Vite: https://stackoverflow.com/questions/70309561/unable-to-import-svg-with-vite-as-reactcomponent
import MinhasFotos from '../../assets/feed.svg?react';
import Estatisticas from '../../assets/estatisticas.svg?react';
import AdicionarFoto from '../../assets/adicionar.svg?react';
import Sair from '../../assets/sair.svg?react';

import styles from './UserHeaderNav.module.css';
import useMedia from '../../hooks/useMedia';

const UserHeaderNav = () => {

    const mobile = useMedia('(max-width: 40rem');
    const [mobileMenu, setMobileMenu] = useState(false);
    const { userLogout } = useContext(UserContext);
    const { pathname } = useLocation();

    useEffect(() => {
        setMobileMenu(false);
    }, [pathname]);

    return (
        <>
            {mobile && (
                <button
                    aria-label='Menu'
                    className={`${styles.mobileButton} ${mobileMenu && styles.mobileButtonActive}`}
                    onClick={() => setMobileMenu(!mobileMenu)}
                ></button>
            )}
            <nav className={`${mobile ? styles.navMobile : styles.nav} ${mobileMenu && styles.navMobileActive}`}>
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
        </>
    )
}

export default UserHeaderNav