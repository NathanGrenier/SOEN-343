export const outsideCanadaStrategy = (weight: number, isExpress: boolean): number => {
    const baseCost = 5;
    const weightCost = weight * 5;
    const expressCost = isExpress ? 15 : 0;
    return baseCost + weightCost + expressCost;
  };
  