import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { UserStorage } from './contexts/UserContext';
import User from './components/user/User';
import ProtectedRoute from './components/helper/ProtectedRoute';
import Photo from './components/photo/Photo';
import UserProfile from './components/user/UserProfile';
import NotFound from './components/helper/NotFound';

const App = () => {
    return <div>
        <BrowserRouter>
            <UserStorage>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login/*" element={<Login />} />
                    <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
                    <Route path="foto/:id" element={<Photo />} />
                    <Route path="perfil/:user" element={<UserProfile />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </UserStorage>
        </BrowserRouter>
    </div>;
};

export default App;
