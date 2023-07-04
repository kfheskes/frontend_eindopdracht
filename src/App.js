import './App.css';
import React from "react";
import {Routes, Route} from 'react-router-dom'
import Navbar from "./components/navbar/Navbar";
import Favorite from "./pages/favorite/Favorite";
import Home from "./pages/home/Home";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import SearchResult from "./pages/searchResult/SearchResult";
import NotFound from "./pages/notFound/NotFound";

function App() {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/signIn" element={<SignIn/>}/>
                <Route path="/signUp" element={<SignUp/>}/>
                <Route path="/favorite" element={<Favorite/>}/>
                {/*<Route path="/searchResult" element={<SearchResult/>}/>*/}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    );
}

export default App;
