import { Product } from './src/product';
import { Electronic } from './src/electronic';
import { Clothing } from './src/clothing';

describe('Product', () => {
  test('should create a new Product instance', () => {
    const product = new Product(1, 'Test Product', 9.99);
    expect(product.id).toBe(1);
    expect(product.name).toBe('Test Product');
    expect(product.price).toBe(9.99);
  });

  test('should increase the Product price', () => {
    const product = new Product(1, 'Test Product', 10);
    product.increasePrice(50);
    expect(product.price).toBe(15);
  });

  test('should decrease the Product price', () => {
    const product = new Product(1, 'Test Product', 10);
    product.decreasePrice(50);
    expect(product.price).toBe(5);
  });
});

describe('Electronic', () => {
    test('should create a new Electronic instance', () => {
      const electronic = new Electronic(2, 'Test Electronic', 19.99, 'Test Brand');
      expect(electronic.id).toBe(2);
      expect(electronic.name).toBe('Test Electronic');
      expect(electronic.price).toBe(19.99);
      expect(electronic.brand).toBe('Test Brand');
    });
  });

describe('Clothing', () => {
    test('should create a new Clothing instance', () => {
        const clothing = new Clothing(3, 'Test Clothing', 29.99, 'M');
        expect(clothing.id).toBe(3);
        expect(clothing.name).toBe('Test Clothing');
        expect(clothing.price).toBe(29.99);
        expect(clothing.size).toBe('M');
    });

    test('should override toString method to include size', () => {
        const clothing = new Clothing(4, 'Test Clothing', 39.99, 'L');
        expect(clothing.toString()).toBe('Product: Test Clothing, Price: $39.99, Size: L');
    });
});