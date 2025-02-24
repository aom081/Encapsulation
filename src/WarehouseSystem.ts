export class Product {
    readonly id: number;
    protected name: string;
    private price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;
        this.name = name;
        this.price = price;
    }

    getPrice(): number {
        return this.price
    }

    setPrice(newPrice: number): void {
        if (newPrice >= 0) {
            this.price = newPrice;
        }
    }
}

export class DiscountedProduct extends Product {
    applyDiscount(discountPercent: number): void {
        const discountedPrice = this.getPrice() * (1 - discountPercent / 100);
        this.setPrice(discountedPrice);
    }
}