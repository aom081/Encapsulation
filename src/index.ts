import { BankAccount, SavingAccount, } from "./BankingSystem";
import { UserAccount, AdminAccount } from "./UserAccountSystem"
import { Product, DiscountedProduct } from "./WarehouseSystem"
import { Car } from "./CarSystem"


// ทดสอบระบบธนาคาร
console.log("=== ระบบธนาคาร ===");
const myAccount = new BankAccount("644259014", "Aom", 5000);
console.log("Account Number:", myAccount.accountNumber);
console.log("ยอดคงเหลือเริ่มต้น:", myAccount.getBalance());
myAccount.deposit(2000);
console.log("ยอดคงเหลือหลังการฝากเงิน:", myAccount.getBalance());
myAccount.withdraw(1500);
console.log("ยอดคงเหลือหลังการถอน:", myAccount.getBalance());

const mySavingAccount = new SavingAccount("644259014", "Aom", 10000, 5);
console.log("ยอดออมเริ่มต้น:", mySavingAccount.getBalance());
mySavingAccount.addInterest();
console.log("ยอดคงเหลือหลังดอกเบี้ย:", mySavingAccount.getBalance());

// ทดสอบระบบบัญชีผู้ใช้
console.log("\n=== ระบบบัญชีผู้ใช้ ===");
const user = new UserAccount("aom081", "1467800011962", "644259014@webmail.npru.ac.th");
console.log("Username:", user.username);
console.log("เปลี่ยนรหัสผ่านสำเร็จ:", user.changePassword("1467800011962", "0817423467"));
console.log("เปลี่ยนรหัสผ่านล้มเหลว:", user.changePassword("wrongPassword", "0817423467"));

const admin = new AdminAccount("admin123", "admin@example.com", "adminpass");
console.log("กำลังรีเซ็ตรหัสผ่านผู้ดูแลระบบ...");
admin.resetPassword("adminNewPass");
console.log("เปลี่ยนรหัสผ่านผู้ดูแลระบบสำเร็จ:", admin.changePassword("adminNewPass", "securePass"));

// ทดสอบระบบคลังสินค้า
console.log("\n=== ระบบคลังสินค้า ===");
const product = new DiscountedProduct(101, "Laptop", 1000);
console.log("Product ID:", product.id);
console.log("ราคาเดิม:", product.getPrice());
product.applyDiscount(10);
console.log("ราคาลดแล้ว:", product.getPrice());

// ทดสอบระบบรถยนต์
console.log("\n=== ระบบรถยนต์ ===");
const myCar = new Car("Toyota");
console.log("Car Brand:", myCar.brand);
console.log("ความเร็วเริ่มต้น:", myCar.getSpeed());
myCar.accelerate(30);
console.log("ความเร็วหลังการเร่งความเร็ว:", myCar.getSpeed());
myCar.brake(10);
console.log("ความเร็วหลังการเบรก:", myCar.getSpeed());
