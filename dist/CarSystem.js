"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
class Car {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    accelerate(amount) {
        if (amount > 0) {
            this.speed += amount;
        }
    }
    brake(amount) {
        if (amount > 0) {
            this.speed = Math.max(0, this.speed - amount);
        }
    }
    getSpeed() {
        return this.speed;
    }
}
exports.Car = Car;
