
import { ProductDataInterface, } from "@/components/admin/product/product-utils/product-interface"
import axios, { AxiosRequestConfig } from 'axios';
type collectionInterface = {
  collectionName: string,
  collectionDescription: string,
  collectionIds: string[],
  collectionCategory: string[],
}
type ApiUploadCollectionprops = {
  jwtToken: string
  requestBody: collectionInterface
}
type ApiLikeCollectionprops = {
  jwtToken: string
  collectionId:string
}
async function PostApiCollectionCall(args: { requestBody?: collectionInterface | null; jwtToken?: string, apiroute: string }) {
  try {
    const { requestBody, jwtToken, apiroute } = args;
    const requestBOd = {
      name: requestBody?.collectionName,
      description: requestBody?.collectionDescription,
      Ids: requestBody?.collectionIds,
      category: requestBody?.collectionCategory
    }
    const response = await axios({
      method: "POST",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${apiroute}`,
      withCredentials: true,
      data: requestBOd,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
        'Cache-Control': 'public, max-age=3600',
      },
    });
    return response
  } catch (error) {
    console.log(error)
    throw error
  }
}
export function ApiUploadCollection({ jwtToken, requestBody }: ApiUploadCollectionprops) {
  const apiroute = "/collection/upload"
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ jwtToken, apiroute, requestBody });
    console.log("response.data", response.data)
    return response.data;
  };
  return SubmitHandler();
}
export function ApiLikeCollection({ jwtToken, collectionId}: ApiLikeCollectionprops) {
  const apiroute = `/collection/Like/${collectionId}`
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ jwtToken, apiroute });
    console.log("response.data", response.data)
    return response.data;
  };
  return SubmitHandler();
}
export function ApiFetchCollection({ categoryQuery,jwtToken,likedQuery }: { categoryQuery?: string,jwtToken:string,likedQuery?: string }) {
  const apiroute = `/collection/fetch?categoryQuery=${categoryQuery}&likedQuery=${likedQuery}`
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ apiroute ,jwtToken});
    console.log("response.data.data.products", response.data.data.products)
    return response.data;
  };
  return SubmitHandler();
}