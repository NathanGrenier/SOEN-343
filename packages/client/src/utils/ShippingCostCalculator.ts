type CostStrategy = (weight: number, isExpress: boolean, shippingFee: number) => number;

export class ShippingCostCalculator {
  private strategy: CostStrategy;

  constructor(strategy: CostStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: CostStrategy) {
    this.strategy = strategy;
  }

  // Allow calling with or without shippingFee
  calculate(weight: number, isExpress: boolean, shippingFee?: number): number {
    // If shippingFee is undefined, pass 0 to the strategy
    return this.strategy(weight, isExpress, shippingFee ?? 0);
  }
}
