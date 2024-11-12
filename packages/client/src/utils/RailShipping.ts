//RailShipping.ts

import { ShippingMethodStrategy } from "./ShippingMethodStrategy";

export class RailShipping implements ShippingMethodStrategy {
    private shippingFee = 35;
  getName(): string {
    return "Rail Shipping";
  }
  getFee(): number{
    return this.shippingFee;
  }
}