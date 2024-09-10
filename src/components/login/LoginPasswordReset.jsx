import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import Input from '../forms/input/Input';
import Button from '../forms/button/Button';
import useForm from '../../hooks/useForm';
import { PASSWORD_RESET } from '../../api';
import useFetch from '../../hooks/useFetch';
import Error from '../error/Error';
import Head from '../helper/Head';

const LoginPasswordReset = () => {

    const [login, setLogin] = useState('');
    const [key, setKey] = useState('');
    const password = useForm('password');
    const { error, loading, request } = useFetch();

    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();
        if (password.validate()) {
            const { url, options } = PASSWORD_RESET({
                login, key, password: password.value
            });
            const { response } = await request(url, options);
            if (response.ok) navigate('/login');
        }
    }

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const key = params.get('key');
        const login = params.get('login');
        if (key) setKey(key);
        if (login) setLogin(login);
    }, []);

    return (
        <div>
            <Head title={"Resete a senha"} description={"Resete a senha"} />
            <h1 className='title'>Resete a Senha</h1>
            <form onSubmit={handleSubmit}>
                <Input label="Nova Senha" type="password" name="password" {...password} />
                {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button>}
                <Error error={error} />
            </form>
        </div>
    )
}

export default LoginPasswordReset