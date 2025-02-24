"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiscountedProduct = exports.Product = void 0;
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return this.price;
    }
    setPrice(newPrice) {
        if (newPrice >= 0) {
            this.price = newPrice;
        }
    }
}
exports.Product = Product;
class DiscountedProduct extends Product {
    applyDiscount(discountPercent) {
        const discountedPrice = this.getPrice() * (1 - discountPercent / 100);
        this.setPrice(discountedPrice);
    }
}
exports.DiscountedProduct = DiscountedProduct;
