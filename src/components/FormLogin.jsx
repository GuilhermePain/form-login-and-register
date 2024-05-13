import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgWelcome from '../assets/undraw_Welcome_re_h3d9.png';
import { FormContainerLogin, MainContainerLogin, Fields, SubmitButton } from './FormLoginStyle';

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!email.trim()) {
            validationErrors.email = 'O campo de email não pode ficar vazio.';
        } else {
            alert('Usuário logado com sucesso!');
        }
        
        if (!password.trim()) {
            validationErrors.password = 'O campo de senha não pode ficar vazio.';
        } else {
            alert('Usuário logado com sucesso!');
        }

        setErrors(validationErrors);
    };

    return (
        <>
            <MainContainerLogin>
                <aside>
                    <img src={imgWelcome} alt="Imagem ilustrativa de login" />
                </aside>
                <FormContainerLogin onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <hr />
                    {errors.auth && <p className='errorMessage'>{errors.auth}</p>}
                    <Fields showError={!!errors.email}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='Digite seu email'
                            onFocus={() => setErrors({ ...errors, email: '' })}
                        />
                        {errors.email && <p className='errorMessage'>{errors.email}</p>}
                    </Fields>
                    <Fields showError={!!errors.password}>
                        <label>Senha</label>
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='Digite sua senha'
                            onFocus={() => setErrors({ ...errors, password: '' })}                        />
                        {errors.password && <p className='errorMessage'>{errors.password}</p>}
                    </Fields>
                    <div>
                        <input
                            type="checkbox"
                            checked={showPassword}
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label>Mostrar senha</label>
                    </div>
                    <SubmitButton type='submit'>Entrar</SubmitButton>
                    <p>
                        Não tem uma conta? <Link to="/register">Registre-se</Link>
                    </p>
                </FormContainerLogin>
            </MainContainerLogin>
        </>
    );
}

export default FormLogin;
