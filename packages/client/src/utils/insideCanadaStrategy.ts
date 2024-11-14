export const insideCanadaStrategy = (weight: number, isExpress: boolean, shippingFee: number): number => {
    const baseCost = 0.5;
    const weightCost = weight * 5;
    const expressCost = isExpress ? 15 : 0;
    return baseCost + weightCost + expressCost + shippingFee;
  };
  