import { ShippingMethodStrategy } from "./ShippingMethodStrategy";

export class SeaShipping implements ShippingMethodStrategy {
    private shippingFee = 15;
  getName(): string {
    return "Sea Shipping";
  }
  getFee(): number{
    return this.shippingFee;
  }
}