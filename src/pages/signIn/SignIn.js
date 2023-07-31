import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import "./SignIn.css"
import styles from '../../components/Button/Button.module.css'

function SignIn() {
    const {login} = useContext(AuthContext)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        // stap 3.1 maak een axios request
        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username,
                password,
            });
            console.log(res)
            console.log(res.data)
            // Stap 4: Geef de JWT mee aan de login functie
            login(res.data.accessToken , '/')
        } catch (e) {
            console.error("Login mislukt", e)
            setErrorMessage('Oops, try again. Username or password is incorrect.')
            // zorg voor een foutmelding als geprobeerd om in te loggen met een verkeerde email
        }
    }



    return (
                    <div className="form-container">
                        <div className='biero-logo-container'>
                            <p>Biero</p>
                        </div>
                        <h2>Sign in</h2>
                        {errorMessage && <div>{errorMessage}</div>}
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input id="username" type="username" placeholder="Username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="password">Password:</label>
                                <input id="password" type="password" placeholder="*********" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                            </div>
                            <div className="button-container-sign">
                            <button type="submit" className={styles['btn-sign']}>Sign in</button>
                            </div>
                            </form>

                        <p>--------------New here? ------------- <Link to="/signUp"> Click here to sign up</Link></p>
                    </div>
    );
}

export default SignIn;