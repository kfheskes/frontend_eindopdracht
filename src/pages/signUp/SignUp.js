import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../../components/Button/Button.module.css';

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateEmail = (value) => {
        if (!value.includes('@')) {
            return 'Email should contain an @';
        }
        return '';
    };

    const validatePassword = (value) => {
        if (value.length < 6) {
            return 'Password must be at least 6 characters long';
        }
        return '';
    };

    async function handleSubmit(e) {
        e.preventDefault();

        if (emailError || passwordError) {
            return;
        }

        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email,
                password,
                username,
                role: ['user'],
            });
            console.log(res);
            setSuccessMessage('Registration Successful, please sign in');
            setErrorMessage('')
        } catch (e) {
            console.error('Registratie mislukt', e);
            setErrorMessage('Please fill in the form correctly');
            setSuccessMessage('');
        }
    }

    return (
        <div className="form-container">
            <div className="biero-logo-container">
                <p>Biero</p>
            </div>
            <h2>Sign up</h2>
            {errorMessage && <div className='error-message'>{errorMessage}</div>}
            {successMessage && <div className='success-message'>{successMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Emailadres:</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}
                        onBlur={(e) => setEmailError(validateEmail(e.target.value))}
                    />
                    {emailError && <div className='error-message'>{emailError}</div>}
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="************"
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)}
                        onBlur={(e) => setPasswordError(validatePassword(e.target.value))}
                    />
                    {passwordError && <div className='error-message'>{passwordError}</div>}
                </div>
                <div className="button-container-sign">
                        <button type="submit" className={styles['btn-sign']}> Sign up
                    </button>
                </div>
            </form>
            <p>
                Do you already have an account?
                <Link to="/signIn">Click here</Link> to sign in
            </p>
        </div>
    );
}

export default SignUp;
