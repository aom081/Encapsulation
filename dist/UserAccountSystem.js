"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminAccount = exports.UserAccount = void 0;
class UserAccount {
    constructor(username, password, email) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    changePassword(oldPassword, newPassword) {
        if (this.password === oldPassword) {
            this.password === newPassword;
            return true;
        }
        return false;
    }
}
exports.UserAccount = UserAccount;
class AdminAccount extends UserAccount {
    resetPassword(newPassword) {
        this.password = newPassword;
    }
}
exports.AdminAccount = AdminAccount;
