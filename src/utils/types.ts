/* Data strcutures */

interface Price {
    id: number,
    value: number
}

interface IAdjusters {
    id: number;
    name: string;
    price: Price
}

interface IVariants {
    id: number,
    name: string,
    description: string,
    price: Price,
    adjusters: IAdjusters[]
}

interface IPriceBand {
    id: number,
    name: string,
    description: string,
    color: string,
    variants: IVariants[]
}

interface IPricing {
    id: number,
    capacity: number,
    capacityRemaining: number,
    priceBand: IPriceBand,
    pricing: IPricing[],
}

interface IPerformance {
    id: number,
    capacity: number,
    capacityRemaining: number,
    priceBand: IPriceBand,
    pricing: IPricing[],
}
  

export type { IPerformance, IPricing, IVariants, IPriceBand }