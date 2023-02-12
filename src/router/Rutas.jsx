import React from 'react';
import { Routes, Route, BrowserRouter, Navigate, Router } from "react-router-dom";
import { Articulo } from '../components/articulo';
import { Footer } from '../components/common/Footer';
import { Navigation } from '../components/common/Navigation';
import { Inicio } from '../components/Inicio';
import ScrollToTop from '../utils/ScrollToTop';

export const Rutas = () => {
    return (
        <BrowserRouter>
            {/* HEADER Y NAVEGACION */}
            <Navigation />

            {/* CONTENIDO CENTRAL */}
            <div className='content'>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/inicio" element={<Inicio />} />
                    <Route path={'/:type/:id'} element={<Articulo />} />
                    <Route path="*" element={
                        <div className="error">
                            <h1>Error 404</h1>
                        </div>
                    } />
                </Routes>
            </div>

            {/* FOOTER*/}
            <Footer />

        </BrowserRouter>
    )
}
