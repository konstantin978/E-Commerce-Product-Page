import { useEffect, useReducer, useState } from 'react'
import './App.css'
import { Header } from './components/header/Header'
import { initialState, ProductContext, reducer } from './context'
import { Products } from './components/products/Products';
import { IProduct } from './assets/types';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const [cart, setCart] = useState<IProduct[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <>
      <ProductContext.Provider value={{ state, dispatch }} >

        <Header cart={cart} />
        <Products cart={cart} setCart={setCart} />
      </ProductContext.Provider>

    </>
  );

}

export default App
