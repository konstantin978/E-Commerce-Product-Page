export interface IProduct {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
    count: number;
};

export interface ProductProps {
    info: IProduct;
    addToCart: (product: IProduct) => void;
};

export interface ProductsProps {
    cart: IProduct[];
    setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
};

export interface HeaderProps {
    cart: IProduct[];
};

export interface IProductContext {
    state: IState;
    dispatch: (action: Action) => void;
};

export interface IState {
    products: IProduct[];
};

export type Action =
    | { type: 'ADD'; payload: IProduct }
    | { type: 'DELETE'; payload: string }