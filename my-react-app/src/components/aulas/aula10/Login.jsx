import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (username === 'username' && password === '123') {
            localStorage.setItem('isLoggedIn', 'true');
            navigate('/home');
            return;
        }

        setError('Usuario ou senha invalidos.');
    };

    return (
        <main className="login-page">
            <section className="login-card">
                <h1>Entrar</h1>
                <p>Acesse seu projeto React</p>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="username">
                        Usuario
                        <input type="text" name="username" placeholder="Digite seu usuario" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                    </label>
                    <label htmlFor="password">
                        Senha
                        <input type="password" placeholder="Digite sua senha" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    {error && <p className="login-error">{error}</p>}
                    <button className="primary-button" type="submit">Entrar</button>
                </form>
            </section>
        </main>
    );
};

export default Login;
