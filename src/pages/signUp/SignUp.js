
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from '../../components/Button/Button.module.css'

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [errorMessage, setErrorMessage] = useState ('')

    async function handleSubmit (e) {
        e.preventDefault();
        // Stap 3: Request naar de server met inlog-gegevens
        // stap 3.1 maak een axios request
        try {
            const res = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                email,
                password,
                username,
                role: ["user"],
            });
            console.log(res)
        } catch (e) {
            console.error("Registratie mislukt", e)
            setErrorMessage('please fill in the form correctly')
        }

    }

    return (
        <div className="form-container">
            <div className='biero-logo-container'>
                <p>Biero</p>
            </div>
            <h2>Sign up</h2>
            {errorMessage && <div>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Emailadres:</label>
                    <input id="email" type="email" placeholder="Emailadres" value={email} onChange={(e) =>setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="text" placeholder="Username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" placeholder="************" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <div className="button-container-sign">
                <button type='submit' className={styles['btn-sign']}>Sign up</button>
                </div>
            </form>
            <p>Do you have already an account <Link to="/signIn">klik here</Link> to sign in</p>
        </div>
    );
}

export default SignUp;