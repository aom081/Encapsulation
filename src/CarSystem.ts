export class Car {
    readonly brand: string;
    private speed: number;

    constructor(brand: string) {
        this.brand = brand;
        this.speed = 0;
    }

    accelerate(amount: number): void {
        if (amount > 0) {
            this.speed += amount;
        }
    }

    brake(amount: number): void {
        if (amount > 0) {
            this.speed = Math.max(0, this.speed - amount);
        }
    }

    getSpeed(): number {
        return this.speed;
    }
}