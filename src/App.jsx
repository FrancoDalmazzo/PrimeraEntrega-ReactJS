
import './App.css'
import React, { useState, useEffect } from 'react';
import NavBar from "./componentes/NavBar/NavBar"
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import productosData from './componentes/ItemListContainer/productos.json';
import Hero from "./componentes/Hero/Hero"
import Footer from './componentes/Footer/Footer';
import '@fortawesome/fontawesome-free/css/all.css';


const App = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setProductos(productosData);
    }, []);

    return (
        <div className="App">
            <NavBar/>          
            <Hero/>
            <h1>Discos</h1>
            <ItemListContainer productos={productos} />
            <Footer/>
        </div>
    );
};
export default App
