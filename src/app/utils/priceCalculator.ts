interface PriceOptions {
    basePrice: number;
    casePrice: number;
    bandPrice: number;
    sizePrice: number;
  }
  
  export function calculatePrice({ basePrice, casePrice, bandPrice, sizePrice }: PriceOptions): number {
    return basePrice + casePrice + bandPrice + sizePrice;
  }
  