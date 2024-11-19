
import { Product } from "../home/cards/card";
export function calculateTotalPrice(products: Product[]) {
    return products.reduce((total, product) => {
        const price = parseFloat(product.price);
        if (isNaN(price)) {
            console.error(`Invalid price: ${product.price}`);
            return total;
        }
        return total + price;
    }, 0);
}