import React, { useContext } from 'react'
import UserHeader from './UserHeader'
import { Route, Routes } from 'react-router-dom'
import Feed from '../feed/Feed'
import UserFotoPost from './UserFotoPost'
import UserStats from './UserStats'
import { UserContext } from '../../contexts/UserContext'
import NotFound from '../helper/NotFound'

const User = () => {

    const { data } = useContext(UserContext);

    return (
        <section className='container'>
            <UserHeader />
            <Routes>
                <Route path="/" element={<Feed user={data.id} />} />
                <Route path="postar" element={<UserFotoPost />} />
                <Route path="estatisticas" element={<UserStats />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </section>
    )
}

export default User