import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import './App.css';

import Layout from "./components/Layout/Layout";
import Home from "./components/pages/Home";
import AboutUs from "./components/pages/AboutUs";


function App() {
    return (
        <>
            <BrowserRouter>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home /> } />
                        <Route path="/aboutUs" element={<AboutUs /> } />

                    </Routes>
                </Layout>
            </BrowserRouter>
        </>
    );
}

export default App;
