export interface PaymentStrategy {
    processPayment(): Promise<string>;
}