export class Product {
    productname: string;
    productdescription: string;
    isproductavailable: boolean;
    productprice: number;
    productbrand: string;
    productimage: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}