import './header.css';
import { HeaderProps } from '../../assets/types';
import { useState } from 'react';

export const Header = ({ cart }: HeaderProps) => {

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [calculatedTotal, setCalculatedTotal] = useState<number>(0);

    const openPopUp = () => {
        calculateTotal()
        setIsPopupOpen(true); 
    };

    const closePopUp = () => {
        setIsPopupOpen(false);
    };

    const calculateTotal = () => {
        let value = 0;
        cart.forEach(item => {
            value += item.price * item.count;
        })

        setCalculatedTotal(value);
    };

    return <header>
        <div className="nav">
            <div className='logo'>
                <h2 className='logo-text'>Mega Market</h2>
                <h3 className='logo-second-text'>Up to 75% Sale</h3>
            </div>
            <div className="cart-container">
                <div className="cart-background" onClick={() => openPopUp()}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 576 512"
                        className='cart-icon'
                    >
                        <path d="M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
                    </svg>
                    {
                        cart.length > 0 && <span className="cart-count">{cart.length}</span>
                    }
                </div>
            </div>
        </div>
        {isPopupOpen && (
            <div className="popup-overlay" onClick={closePopUp}>
                <div className="popup" onClick={e => e.stopPropagation()}>
                    <h3>Cart Items</h3>
                    <ul>
                        {cart.length > 0 ? (
                            cart.map((item, index) => (
                                <li key={index} className='item'>
                                    <img src={item.img} alt="product-image" width={125} height={125} />
                                    <div className="item-data">
                                        <p>{item.name} - {item.count || 1} pc.</p>
                                        <p style={{ fontWeight: 'bold' }}>{item.price * item.count}</p>
                                    </div>
                                </li>
                            ))
                        ) : (
                            <li>Your cart is empty</li>
                        )}
                    </ul>
                    {cart.length > 0 ? (
                        <div className="total">
                            <p className='total-text'>Total: {calculatedTotal}</p>
                        </div>
                    ) : <></>}
                    <button onClick={closePopUp}>Close</button>
                </div>
            </div>
        )}
    </header>
}