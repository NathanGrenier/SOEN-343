import { ShippingMethodStrategy } from "./ShippingMethodStrategy";

export class AirShipping implements ShippingMethodStrategy {

    private  shippingFee = 20;
  getName(): string {
    return "Air Shipping";
  }
  getFee(): number{
    return this.shippingFee;
  }
}