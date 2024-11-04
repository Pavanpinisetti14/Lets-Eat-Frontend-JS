import React, { useState } from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    const [cartCount, setCartCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (item) => {
      setCartItems([...cartItems, item]);
    //   setCartCount(prevCount => prevCount + 1);
    };

    return (
        <div>
            <Header cartCount={cartCount} cartItems={cartItems} />
            <Outlet context={{ addToCart }} />
        </div>
    );
};

export default Layout;
