import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import About from './pages/About';
import ErrorPage from './pages/Error';
import Home from './pages/Home.jsx';
import Lodging from './pages/Lodging';

function App() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='Kasa-OC/home' element={<Home />}/>
                <Route path='Kasa-OC/lodging/:id' element={<Lodging />}/>
                <Route path='Kasa-OC/about' element={<About />}/>
                <Route path='Kasa-OC/error' element={<ErrorPage/>}/>
                <Route path='*' element={<ErrorPage />}/>
            </Routes>
            <Footer />
        </Router>
    )
}

export default App;