import IProductOption from "./productOption";

export default interface IProduct {
    available: boolean | null;
    brand: string | null;
    id: number | null;
    name: string | null;
    price: string | number ;
    weight: number | null;
    options: IProductOption[];
    image?: string | null;
    quantity?: string | number ;
}