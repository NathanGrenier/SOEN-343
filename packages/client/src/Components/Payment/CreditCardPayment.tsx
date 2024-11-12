import { PaymentStrategy } from './PaymentStrategy';

export class CreditCardPayment implements PaymentStrategy {
    constructor (
        private email: string,
        private cardNumber: string,
        private expiryDate : string,
        private cvv: string
    ) {}

    private isValidExpiryDate(value: string): boolean {
        const month = value.substring(0, 2);
        const year = value.substring(3, 5);
        const monthNum = parseInt(month, 10);
        const yearNum = parseInt(year, 10) + 2000;
        const now = new Date();
        return (
          monthNum >= 1 &&
          monthNum <= 12 &&
          (yearNum > now.getFullYear() || (yearNum === now.getFullYear() && monthNum >= now.getMonth() + 1))
        );
      }
    
      private validateEmail(email: string): boolean {
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return pattern.test(email);
      }

    public async processPayment(): Promise<string> {
        if (!this.validateEmail(this.email)) {
          return Promise.reject(new Error("Invalid email"));
        }
        if (!this.isValidExpiryDate(this.expiryDate)) {
          return Promise.reject(new Error("Invalid expiry date"));
        }
        return Promise.resolve("Credit Card Payment processed successfully");
      }
}