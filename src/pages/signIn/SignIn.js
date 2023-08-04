import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import "./SignIn.css"
import styles from '../../components/Buttons/Button.module.css'
import Button from "../../components/Buttons/Button";
import Validation from "../../components/Validation/Validation";

function SignIn() {
    const {login} = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [userNameError, setUsernameError] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        setUsernameError(Validation.validateUsername(username));
        setPasswordError(Validation.validatePassword(password));

        if (passwordError || userNameError) {
            return;
        }

        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username,
                password,
            });
            login(res.data.accessToken, '/')
        } catch (e) {
            console.error("Login mislukt", e)
            setErrorMessage('Oeps, wrong username or password please try again');
        }
    }

    return (
        <div className="form-container">
            <div className='biero-logo-container'>
                <p>Biero</p>
            </div>
            <h2>Sign in</h2>
            {errorMessage && <div className='error-message'>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="username" placeholder="Username" value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           onBlur={(e) => setUsernameError(Validation.validateUsername(e.target.value))}
                    />
                    {userNameError && <div className='error-message'>{userNameError}</div>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" placeholder="*********" value={password}
                           onChange={(e) => setPassword(e.target.value)}
                           onBlur={(e) => setPasswordError(Validation.validatePassword(e.target.value))}
                    />
                    {passwordError && <div className='error-message'>{passwordError}</div>}
                </div>
                <div className="button-container-sign">

                    <Button type="submit" className={styles['btn-sign']}>Sign in</Button>

                </div>
            </form>

            <p>--------------New here? ------------- <Link to="/signUp"> Click here to sign up</Link></p>
        </div>
    );
}

export default SignIn;