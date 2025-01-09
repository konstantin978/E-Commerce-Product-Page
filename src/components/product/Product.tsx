import { ProductProps } from '../../assets/types';
import './product.css';
export const Product: React.FC<ProductProps> = ({ info, addToCart }) => {

    return <div className='product'>
        <div className='image-section'>
            <img src={info.img} alt="product-image" />
        </div>
        <div className="name-section">
            <h2 className="name-text">{info.name}</h2>
        </div>
        <div className="price-section">
            <p className="price-text">{info.price}</p>
        </div>
        <hr className="responsive-hr" />
        <div className="description-section">
            <div className="description-text-section">
                <p className="description-text">{info.description}</p>
            </div>
            <div className="buy-button-section">
                <button className='buy-button' onClick={() => addToCart(info)}>Add to Cart</button>
            </div>
        </div>
    </div>
};