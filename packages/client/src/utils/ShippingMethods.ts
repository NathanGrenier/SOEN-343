import { ShippingMethodStrategy } from "./ShippingMethodStrategy";
import { DoorToDoorShipping } from "./DoorToDoorShipping";
import { AirShipping } from "./AirShipping";
import { SeaShipping } from "./SeaShipping";
import { RailShipping } from "./RailShipping";

export const getShippingMethods = (): ShippingMethodStrategy[] => [
  new DoorToDoorShipping(),
  new AirShipping(),
  new SeaShipping(),
  new RailShipping(),
];