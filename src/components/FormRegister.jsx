import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import imgLogin from '../assets/undraw_Login_re_4vu2.png';
import { MainContainerRegister, FormContainerRegister, Fields, SubmitButton } from './FormRegisterStyle';

const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!email.trim()) {
            validationErrors.email = 'O campo de email não pode ficar vazio.';
        } else {
            alert('Usuário registrado com sucesso!');
        }

        if (!password.trim()) {
            validationErrors.password = 'O campo de senha não pode ficar vazio.';
        } else if (password.length < 8) {
            validationErrors.password = 'A senha deve ter no mínimo 8 caracteres.';
        } else {
            alert('Usuário registrado com sucesso!');
        }

        if (!confirmPassword.trim()) {
            validationErrors.confirmPassword = 'Confirme a senha.';
        } else if (password !== confirmPassword) {
            validationErrors.confirmPassword = 'As senhas não coincidem.';
        } else {
            alert('Usuário registrado com sucesso!');
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
                            onFocus={() => setErrors({ ...errors, email: '' })}
                        />
                        {errors.email && <p className='errorMessage'>{errors.email}</p>}
                    </Fields>
                    <Fields showError={!!errors.password}>
                        <label>Senha</label>
                        <input 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            type={showPassword ? "text" : "password"} 
                            placeholder='Digite sua senha'
                            onFocus={() => setErrors({ ...errors, password: '' })}
                        />
                        {errors.password && <p className='errorMessage'>{errors.password}</p>}
                    </Fields>
                    <Fields showError={!!errors.confirmPassword}>
                        <label>Confirmar senha</label>
                        <input 
                            value={confirmPassword} 
                            onChange={(e) => setConfirmPassword(e.target.value)} 
                            type={showPassword ? "text" : "password"} 
                            placeholder='Confirme sua senha'
                            onFocus={() => setErrors({ ...errors, confirmPassword: '' })}
                        />
                        {errors.confirmPassword && <p className='errorMessage'>{errors.confirmPassword}</p>}
                    </Fields>
                    <div>
                        <input 
                            type="checkbox" 
                            checked={showPassword} 
                            onChange={() => setShowPassword(!showPassword)} 
                        />
                        <label>Mostrar senha</label>
                    </div>
                    <SubmitButton type='submit'>Registrar</SubmitButton>
                    <p>Já tem uma conta? <Link to="/login">Entrar</Link></p>
                </FormContainerRegister>
            </MainContainerRegister>
        </>
    );
}

export default FormRegister;
