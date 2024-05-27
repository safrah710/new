import React, { useState } from 'react';
import Navbar from './Navbar';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';

function App() {
    const [cart, setCart] = useState(0);
    
    return (
        <>
            <Navbar cart={cart} />
            <Header />
            <Card setcart={setCart} />
            <Footer />
        </>
    );
}

export default App;
