export type MyObjectType = {
    myArray: productsProp; // Replace YourArrayType with the actual type of elements in the array
    myString: string;
};
export const minimalProductArray: productsProp = [{
    id: '',
    link: '',
    subCategory: '',
    category: '',
    image: '',
    webLink: '',
    description: '',
    name: '',
    price: '',
    review: [],
}];
export type productsProp = [{
    id: string,
    subCategory: string,
    link: string,
    category: string,
    image: string,
    webLink: string;
    description: string,
    name: string,
    price: string,
    review: Array<Record<string, unknown>>,
}];
export type productlistprop = {
    subCategory: string;
    name: string;
    link: string;
    description: string;
    category: string;
    webLink: string;
    price: string;
    image: string;
    review: Record<string, unknown>[];
    id: string;
}[];

export interface ProductDataInterface {
    category: string;
    name: string;
    subCategory: string;
    webLink: string;
    link: string;
    description: string;
    price: string;
    image: string; // Assuming image can be null or a string URL
}
export interface ProductDataInterfacewithid {
    id: string
    category: string;
    name: string;
    subCategory: string;
    link: string;
    webLink: string
    description: string;
    price: string;
    image: string; // Assuming image can be null or a string URL
}
