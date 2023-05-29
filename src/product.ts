export class Product {
    id: number;
    name: string;
    price: number;
    
    constructor(id: number, name: string, price: number) {
      this.id = id;
      this.name = name;
      this.price = price;
    }

    increasePrice(percentage: number) {
        this.price += this.price * (percentage / 100);
      }
    
      decreasePrice(percentage: number) {
        this.price -= this.price * (percentage / 100);
      }
}