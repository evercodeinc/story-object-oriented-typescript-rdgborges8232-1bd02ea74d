import { Product } from './src/product';
import { Electronic } from './src/electronic';
import { Clothing } from './src/clothing';

const laptop = new Product(1, 'Laptop', 999.99);
console.log(laptop);

const newLaptop = new Product(1, 'Laptop', 999.99);
newLaptop.decreasePrice(50);
console.log(newLaptop);

const phone = new Electronic(2, 'Phone', 799.99, 'TechCo');
console.log(phone);

const shirt = new Clothing(3, 'Shirt', 29.99, 'M');
console.log(shirt.toString());