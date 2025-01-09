import { createContext } from "react";
import { Action, IProduct, IState, IProductContext } from "./assets/types";

export const ProductContext = createContext<IProductContext | null>(null);

export const initialState: IState = {
    products: [
        {
            name: 'Nike Air Max',
            id: 1,
            price: 15000,
            description: 'Stylish and comfortable green shoes, perfect for running and casual wear.',
            img: 'https://www.futbolemotion.com/imagesarticulos/232814/grandes/zapatilla-nike-air-max-90-negro-1.webp',
            count: 1,
        },
        {
            name: 'Adidas Ultraboost',
            id: 2,
            price: 18000,
            description: 'High-performance running shoes with responsive cushioning.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScjEGyYEOnPJww3EETh_za6gSKGPTG8Ryqdw&s',
            count: 1,
        },
        {
            name: 'Puma RS-X',
            id: 3,
            price: 14000,
            description: 'Retro-inspired sneakers with bold design and superior comfort.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0EN1op-pO4P9ItCI4oycvvTA_gHqjJCaMrQ&s',
            count: 1,
        },
        {
            name: 'Converse Chuck Taylor',
            id: 4,
            price: 12000,
            description: 'Classic high-top sneakers with timeless style.',
            img: 'https://www.converse.ph/media/catalog/product/0/8/0802-CONM9160C00010H-1.jpg',
            count: 1,
        },
        {
            name: 'Reebok Nano X3',
            id: 5,
            price: 16000,
            description: 'Versatile training shoes designed for high-intensity workouts.',
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNUld_NTzI4CI82gjHVM3WlDoUI305QLH7MA&s',
            count: 1,
        },
        {
            name: 'New Balance 574',
            id: 6,
            price: 14000,
            description: 'Everyday casual sneakers with a retro aesthetic.',
            img: 'https://nb.scene7.com/is/image/NB/ml574evg_nb_02_i?$pdpflexf2$&wid=440&hei=440',
            count: 1,
        },
    ]
}

export const reducer = (state: IState, actions: Action) => {
    switch (actions.type) {
        case "ADD":
            return { ...state, products: [...state.products, actions.payload] }
        case "DELETE":
            return {
                ...state,
                products: state.products.filter((product: IProduct) => product.id !== Number(actions.payload))
            }
        default:
            return state;
    }
}