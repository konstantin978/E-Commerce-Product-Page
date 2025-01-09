import './products.css'
import { IProduct, ProductsProps } from '../../assets/types';
import { useProductContext } from '../../assets/hooks';
import { Product } from '../product/Product';

export const Products = ({ cart, setCart }: ProductsProps) => {
    const { state: { products } } = useProductContext();

    const addToCart = (product: IProduct) => {
        const existingItem = cart.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, count: (item.count || 1) + 1 }
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart([...cart, { ...product, count: 1 }]);
        }
    }

    return <section>
        <div className="title-container">
            <h1 className='title'>Products</h1>
        </div>
        <div className="products-grid">
            {
                products.map(product => <Product key={product.id} info={product} addToCart={addToCart} />)
            }
        </div>
        <br />
        <br />
        <br />
    </section>
}