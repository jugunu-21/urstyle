import { RefetchOptions } from "@tanstack/react-query";
import { ProductDataInterfacewithid } from "../../product/product-utils/product-interface";
export interface collectionproductInterface {

    productId: string,
    productName: string,
    ProductImage: string
}

export type addprops = {
    products: Array<collectionproductInterface>,
    setSheetOpen: (sheetOpen: boolean) => void,
    setCollection: (collection: Array<collectionproductInterface>) => (void);
    refetch?: (options?: RefetchOptions) => Promise<any>;
    setSelectProduct: (sheetOpen: boolean) => void,
}
export type collectionInterfacewithproducts = {
    products: ProductDataInterfacewithid[],
    name: string,
    description: string;
    collectionId: string;
    categories: string[];

}

export type collectionupdateprops = {

    collectionToUpdate: collectionInterfacewithproducts,
    setSheetOpen: (sheetOpen: boolean) => void,
    // setCollection: (collection: Array<collectionproductInterface>) => (void);
    refetch?: (options?: RefetchOptions) => Promise<any>;
    // setSelectProduct: (sheetOpen: boolean) => void,
}
export type collectionInterface = {
    collectionName: string,
    collectionDescription: string,
    collectionIds: string[],
    collectionCategory: string[],
}




export type ApiUploadCollectionprops = {
    jwtToken: string
    requestBody: collectionInterface
}
export type ApiUpdateCollectionprops = {
    jwtToken: string
    requestBody: collectionInterface
    collectionId: string
}
export type ApiLikeCollectionprops = {
    jwtToken: string
    collectionId: string
}