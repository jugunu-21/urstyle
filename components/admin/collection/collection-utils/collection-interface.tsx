import { RefetchOptions } from "@tanstack/react-query";

export interface collectionproductInterface {
    productId: string,
    productName: string,
    ProductImage: string

}
export type addprops = {
    collection: Array<collectionproductInterface>,
    setSheetOpen: (sheetOpen: boolean) => void,
    setCollection: (collection: Array<collectionproductInterface>) => (void);
    refetch?: (options?: RefetchOptions) => Promise<any>;
    setSelectProduct: (sheetOpen: boolean) => void,
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
export type ApiLikeCollectionprops = {
    jwtToken: string
    collectionId: string
}