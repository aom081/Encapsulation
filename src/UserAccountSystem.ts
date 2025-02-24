export class UserAccount {
    readonly username: string;
    private password: string;
    protected email: string

    constructor(username: string, password: string, email: string) {
        this.username = username;
        this.password = password;
        this.email = email;
    }

    changePassword(oldPassword: string, newPassword: string) {
        if (this.password === oldPassword) {
            this.password === newPassword
            return true;
        }
        return false
    }
}

export class AdminAccount extends UserAccount {
    resetPassword(newPassword: string): void {
        (this as any).password = newPassword
    }
}