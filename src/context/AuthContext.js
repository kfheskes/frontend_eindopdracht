import React, {createContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import jwt_decode from "jwt-decode";
import checkTokenValidity from "../helper/checkTokenValidity";
import axios from "axios";

export const AuthContext = createContext(null)

function AuthContextProvider({children}) {
    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending'
    });
    const navigate = useNavigate()


    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken && checkTokenValidity(storedToken)) {
            void login(storedToken)
        } else {
            void logout()
        }
    }, [])

    async function login(jwt_token, redirect) {
        const decodedToken = jwt_decode(jwt_token)
        localStorage.setItem('token', jwt_token)
        try {
            const rest = await axios.get(`https://frontend-educational-backend.herokuapp.com/api/user/`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${jwt_token}`,
                }
            })
            setAuth({
                ...auth,
                isAuth: true,
                user: {
                    email: decodedToken.email,
                    id: decodedToken.id,
                    username: decodedToken.username
                },
                status: 'done'
            })
            console.log('De gebruiker is ingelogd 🔓')
            if (redirect) navigate(redirect)
        } catch (e) {
            console.error(e)
            console.log(e)
        }
    }

    function logout() {
        localStorage.removeItem('token');
        setAuth({
            ...auth,
            isAuth: false,
            user: null,
            status: 'done'
        })
        console.log('De gebruiker is uitgelogd 🔒')
        navigate('/')
    }


    const data = {
        isAuth: auth.isAuth,
        user: auth.user,
        login: login,
        logout: logout,
    }

    return (
        <AuthContext.Provider value={data}>
            {auth.status === 'done' ? children : <p>Loading.....</p>}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;