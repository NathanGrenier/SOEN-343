export interface ShippingMethodStrategy {
    getName(): string;
    getFee(): number;
  }