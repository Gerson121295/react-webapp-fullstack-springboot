import { products } from "../data/products";



export const getProducts = () => {
    return products;
}

export const calculateTotal = (items) => {
    //reduce es un callback que contiene el acumulador y el itema ctual(valor actual), en la primera iteracion acumulador es 0(se define en 0), y en la 2da almacena el resultado de item.product.price * item.quantity y asi sucesivamente
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity, 0);
}