import { PaymentStrategy } from './PaymentStrategy';

export class PayPalPayment implements PaymentStrategy {
    constructor(private email: string) {}

  private validateEmail(email: string): boolean {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  }

  public async processPayment(): Promise<string> {
    if (!this.validateEmail(this.email)) {
      return Promise.reject("Invalid email");
    }
    return Promise.resolve("PayPal Payment processed successfully");
  }
}