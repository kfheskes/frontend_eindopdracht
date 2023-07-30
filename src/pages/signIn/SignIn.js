import React, {useContext, useState} from 'react';
import {Link} from 'react-router-dom';
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";
import "./SignIn.css"

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
        <div className="outer-container">
            <div className="inner-container">
                <div className="pages-padding">
                    <div className="form-container">
            <h2>Sign in</h2>
            <p>Enter your username and email</p>
            {errorMessage && <div>{errorMessage}</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input id="username" type="username" placeholder="Username" value={username} onChange={(e) =>setUsername(e.target.value)}/>
                </div>
                {/*voor eind opdracht componenten maken*/}
                <div>
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" placeholder="*********" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <button type="submit">Sign in</button>
            </form>

            <p>Do you have an account? use link to <Link to="/signUp">Sign up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;