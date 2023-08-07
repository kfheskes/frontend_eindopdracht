import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import styles from '../../components/Buttons/Button.module.css';
import Button from "../../components/Buttons/Button";
import Validation from "../../components/Validation/Validation";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userNameError, setUsernameError] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');


    async function handleSubmit(e) {
        e.preventDefault();

        setEmailError(Validation.validateEmail(email));
        setUsernameError(Validation.validateUsername(username));
        setPasswordError(Validation.validatePassword(password));

        if (emailError || passwordError || userNameError) {
            return;
        }

        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email,
                password,
                username,
                role: ['user'],
            });
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
                        onChange={(e) => setEmail(e.target.value)}
                        onBlur={(e) => setEmailError(Validation.validateEmail(e.target.value))}
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
                        onBlur={(e) => setUsernameError(Validation.validateUsername(e.target.value))}
                    />
                    {userNameError && <div className='error-message'>{userNameError}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        id="password"
                        type="password"
                        placeholder="************"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onBlur={(e) => setPasswordError(Validation.validatePassword(e.target.value))}
                    />
                    {passwordError && <div className='error-message'>{passwordError}</div>}
                </div>
                <div className="button-container-sign">
                    <Button type="submit" className={styles['btn-sign']}> Sign up
                    </Button>
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
