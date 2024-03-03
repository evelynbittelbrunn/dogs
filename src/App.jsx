import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { UserStorage } from './contexts/UserContext';

const App = () => {
    return <div>
        <BrowserRouter>
            <UserStorage>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login/*" element={<Login />} />
                </Routes>
                <Footer />
            </UserStorage>
        </BrowserRouter>
    </div>;
};

export default App;
