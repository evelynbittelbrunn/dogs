import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../forms/input/Input';
import Button from '../forms/button/Button';
import useForm from '../../hooks/useForm';
import { UserContext } from '../../contexts/UserContext';

const LoginForm = () => {

    const username = useForm();
    const password = useForm();

    const { userLogin } = useContext(UserContext);

    async function handleSubmit(event) {
        event.preventDefault();
        if (username.validate() && password.validate()) {
            userLogin(username.value, password.value);
        }
    }

    return (
        <section>
            <h1>Login</h1>
            <form action="" onSubmit={handleSubmit}>
                <Input
                    label='Usuário'
                    type='text'
                    name='username'
                    {...username}
                />
                <Input
                    label='Senha'
                    type='password'
                    name='password'
                    {...password}
                />
                <Button>Entrar</Button>
            </form>
            <Link to='/login/criar'>Cadastro</Link>
        </section>
    )
}

export default LoginForm