type CostStrategy = (weight: number, isExpress: boolean) => number;

export class ShippingCostCalculator {
  private strategy: CostStrategy;

  constructor(strategy: CostStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: CostStrategy) {
    this.strategy = strategy;
  }

  calculate(weight: number, isExpress: boolean): number {
    return this.strategy(weight, isExpress);
  }
}
