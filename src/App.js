import './App.css';
import React, {useContext} from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import NotFound from "./pages/notFound/NotFound";
import {GlobalState} from "./context/GlobalState";
import {AuthContext} from "./context/AuthContext";
import Footer from "./components/Footer/Footer";



function App() {
    const { isAuth} = useContext(AuthContext)
    console.log(isAuth)

    return (
        <>
            <GlobalState>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/favorite" element={isAuth ?<Favorite/> : <SignUp/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
                <Footer/>
            </GlobalState>
        </>
    );
}

export default App;
