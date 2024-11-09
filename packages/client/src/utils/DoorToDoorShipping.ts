import { ShippingMethodStrategy } from "./ShippingMethodStrategy";

export class DoorToDoorShipping implements ShippingMethodStrategy {
    private shippingFee = 60;
  getName(): string {
    return "Door-to-Door";
  }
  getFee(): number{
    return this.shippingFee;
  }
}