import { ShippingMethodStrategy } from "./ShippingMethodStrategy";

export class RailShipping implements ShippingMethodStrategy {
  private shippingFee = 15;
  getName(): string {
    return "Rail Shipping";
  }
  getFee(): number{
    return this.shippingFee;
  }
}