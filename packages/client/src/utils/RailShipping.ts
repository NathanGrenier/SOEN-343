import { ShippingMethodStrategy } from "./ShippingMethodStrategy";

export class RailShipping implements ShippingMethodStrategy {
  getName(): string {
    return "Rail Shipping";
  }
}