
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

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
        }

    }

    return (
        <>
            <h1>Registreren</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur atque consectetur, dolore eaque eligendi
                harum, numquam, placeat quisquam repellat rerum suscipit ullam vitae. A ab ad assumenda, consequuntur deserunt
                doloremque ea eveniet facere fuga illum in numquam quia reiciendis rem sequi tenetur veniam?</p>
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
                    <input id="password" type="password" placeholder="Password" value={password} onChange={(e) =>setPassword(e.target.value)}/>
                </div>
                <button type='submit'>Sign up</button>
            </form>
            <p>Do you have already an account <Link to="/signIn">klik here</Link> to sign in</p>
        </>
    );
}

export default SignUp;