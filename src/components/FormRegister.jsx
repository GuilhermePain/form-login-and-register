import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLogin from '../assets/undraw_Login_re_4vu2.png';
import { MainContainerRegister, FormContainerRegister, Fields, SubmitButton } from './FormRegisterStyle';

const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!email.trim()) {
            validationErrors.email = 'O campo de email não pode ficar vazio.';
        }

        if (!password.trim()) {
            validationErrors.password = 'O campo de senha não pode ficar vazio.';
        } else if (password.length < 8) {
            validationErrors.password = 'A senha deve ter no mínimo 8 caracteres.';
        }

        if (!confirmPassword.trim()) {
            validationErrors.confirmPassword = 'Confirme a senha.';
        } else if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'As senhas não coincidem.';
        }

        setErrors(validationErrors);
    };

    return (
        <>
            <MainContainerRegister>
                <aside>
                    <img src={imgLogin} alt="imagem ilustrativa de login" />
                </aside>
                <FormContainerRegister onSubmit={handleSubmit}>
                    <h1>Registro</h1>
                    <hr />
                    <Fields showError={!!errors.email}>
                        <label>Email</label>
                        <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="email" 
                            placeholder='Digite seu email'
                        />
                        {errors.email && <p className='errorMessage'>{errors.email}</p>}
                    </Fields>
                    <Fields showError={!!errors.password}>
                        <label>Senha</label>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type="password" 
                            placeholder='Digite sua senha'
                        />
                        {errors.password && <p className='errorMessage'>{errors.password}</p>}
                    </Fields>
                    <Fields showError={!!errors.confirmPassword}>
                        <label>Confirmar senha</label>
                        <input 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            type="password" 
                            placeholder='Confirme sua senha'
                        />
                        {errors.confirmPassword && <p className='errorMessage'>{errors.confirmPassword}</p>}
                    </Fields>
                    <div>
                        <input type="checkbox" />
                        <label>Mostrar senha</label>
                    </div>
                    <SubmitButton type='submit'>Registrar</SubmitButton>
                    <p>
                        Já tem uma conta? <Link to="/login">Entrar</Link>
                    </p>
                </FormContainerRegister>
            </MainContainerRegister>
        </>
    );
}

export default FormRegister;
