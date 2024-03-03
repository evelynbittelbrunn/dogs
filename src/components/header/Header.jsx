import React, { useContext } from 'react'
import styles from './Header.module.css'
import { Link } from 'react-router-dom'
import Dogs from '../../assets/dogs.svg?react'
import { UserContext } from '../../contexts/UserContext'

const Header = () => {
    const { data } = useContext(UserContext);
    return (
        <header className={styles.header}>
            <nav className={`${styles.nav} container`}>
                <Link to='/' className={styles.logo}><Dogs /></Link>
                {data
                    ? <Link to='/conta' className={styles.login}>{data.nome}</Link>
                    : <Link to='/login' className={styles.login}>Login / Criar</Link>
                }

            </nav>
        </header>
    )
}

export default Header