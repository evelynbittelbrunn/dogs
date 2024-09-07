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

const App = () => {
    return <div>
        <BrowserRouter>
            <UserStorage>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="login/*" element={<Login />} />
                    <Route path="conta/*" element={<ProtectedRoute><User /></ProtectedRoute>} />
                </Routes>
                <Footer />
            </UserStorage>
        </BrowserRouter>
    </div>;
};

export default App;
