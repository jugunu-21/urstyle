

import { ProductDataInterface, } from "@/components/admin/product/product-utils/product-interface"
import axios, { AxiosRequestConfig } from 'axios';
type collectionInterface = {
  CollectionName: string,
  CollectionDescription: string,
  CollectionIds: string[],
}
type ApiUploadCollectionprops = {
  jwtToken: string
  requestBody: collectionInterface
}
async function PostApiCollectionCall(args: { requestBody?: collectionInterface | null; jwtToken: string, apiroute: string }) {
  try {
    const { requestBody, jwtToken, apiroute } = args;
    const requestBOd = {
      name: requestBody?.CollectionName,
      description: requestBody?.CollectionDescription,
      Ids: requestBody?.CollectionIds
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
export function ApiFetchCollection({ jwtToken }: { jwtToken: string }) {

  const apiroute = "/collection/fetch"
  const SubmitHandler = async () => {

    const response = await PostApiCollectionCall({ jwtToken, apiroute });
    // console.log("response.data", response.data)
    console.log("response.data.data.products", response.data.data.products)
    return response.data;

  };
  return SubmitHandler();
}