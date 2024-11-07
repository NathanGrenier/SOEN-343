export interface PaymentStrategy {
    processPayment(details: any): Promise<string>;
}