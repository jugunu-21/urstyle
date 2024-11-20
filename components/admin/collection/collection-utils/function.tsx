
import { ProductDataInterface, } from "@/components/admin/product/product-utils/product-interface"
import axios, { AxiosRequestConfig } from 'axios';
import { collectionInterface, ApiUploadCollectionprops, ApiLikeCollectionprops, ApiUpdateCollectionprops } from "./collection-interface";
async function PostApiCollectionCall(args: { requestBody?: collectionInterface | null; jwtToken?: string, apiroute: string }) {
  try {
    const { requestBody, jwtToken, apiroute } = args;
    const requestBOd = {
      name: requestBody?.collectionName,
      description: requestBody?.collectionDescription,
      Ids: requestBody?.collectionIds,
      collectionCategory: requestBody?.collectionCategory
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
async function DeleteApiCollectionCall(args: { jwtToken?: string, apiroute: string }) {
  try {
    const { jwtToken, apiroute } = args;


    const response = await axios({
      method: "DELETE",
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${apiroute}`,
      withCredentials: true,

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
export function ApiUpdateCollection({ jwtToken, requestBody, collectionId }: ApiUpdateCollectionprops) {
  const apiroute = `/collection/update/${collectionId}`
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ jwtToken, apiroute, requestBody });
    console.log("response.data", response.data)
    return response.data;
  };
  return SubmitHandler();
}
export function ApiLikeCollection({ jwtToken, collectionId }: ApiLikeCollectionprops) {
  const apiroute = `/collection/Like/${collectionId}`
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ jwtToken, apiroute });
    console.log("response.data", response.data)
    return response.data;
  };
  return SubmitHandler();
}
export function ApiFetchCollection({ categoryQuery, jwtToken, likedQuery }: { categoryQuery?: string, jwtToken: string, likedQuery?: string }) {
  const apiroute = `/collection/fetch?categoryQuery=${categoryQuery}&likedQuery=${likedQuery}`
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ apiroute, jwtToken });

    return response.data;
  };
  return SubmitHandler();
}
export function ApiDeleteCollection({ collectionId, jwtToken }: { collectionId: string, jwtToken: string }) {
  const apiroute = `/collection/delete/${collectionId}`
  const SubmitHandler = async () => {
    const response = await DeleteApiCollectionCall({ apiroute, jwtToken });

    return response.data;
  };
  return SubmitHandler();
}
export function AdminApiFetchCollection({ categoryQuery, jwtToken, likedQuery }: { categoryQuery?: string, jwtToken: string, likedQuery?: string }) {
  const apiroute = `/collection/admincollectionfetch?categoryQuery=${categoryQuery}&likedQuery=${likedQuery}`
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ apiroute, jwtToken });

    return response.data;
  };
  return SubmitHandler();
}
export function ApiFetchCollectionById({ collectionId, jwtToken }: { collectionId: string, jwtToken: string }) {
  const apiroute = `/collection/collectionByCollectionId/${collectionId}`
  const SubmitHandler = async () => {
    const response = await PostApiCollectionCall({ apiroute, jwtToken });
    return response.data;
  };
  return SubmitHandler();
}