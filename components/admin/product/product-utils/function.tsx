
import { ProductDataInterface } from "./product-services/product-data-interface"
import { collectionproductInterface } from "./product-interface"
import axios, { AxiosRequestConfig } from 'axios';
import { decodeBase64, srctoBase64 } from "@/components/admin/product/product-utils/product-services/image-services"
import { error } from "console";
type ApiUploadProductsprops = {
  responses?: string
  jwtToken: string
  requestBody: ProductDataInterface
};
type collectionInterface = {
  CollectionName: string,

  CollectionDescription: string,
  CollectionIds: string[],
}
type ApiUploadCollectionprops = {
  jwtToken: string
  requestBody: collectionInterface
}
type ApiFetchProductsprops = {
  jwtToken: string
  requestBody: ProductDataInterface
  id?: string
}
async function PostApiCall(args: { requestBody?: ProductDataInterface | null; jwtToken: string, apiroute: string }) {
  try {
    const { requestBody, jwtToken, apiroute } = args;

    const formData = new FormData();
    if (requestBody) {
      Object.entries(requestBody).forEach(([key, value]) => {
        if (key !== 'image') {
          formData.append(key, String(value));
        }
      });
    }
    if (requestBody?.image) {
      try {
        const blob = srctoBase64(requestBody.image);
        const file = decodeBase64(blob);
        formData.append('image', file);

      }
      catch {

        formData.append('image', requestBody.image);

      }



    }
    console.log("formData", formData)
    const response = axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_BASE_URL}${apiroute}`,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    return response;
  } catch (error) {
    console.log(error)
    throw error
  }
}
async function PostApiColectionCall(args: { requestBody: collectionInterface | null; jwtToken: string, apiroute: string }) {
  try {
    const { requestBody, jwtToken, apiroute } = args;
    const requestBOd = {
      name: requestBody?.CollectionName,
      description: requestBody?.CollectionDescription,
      Ids: requestBody?.CollectionIds
    }
    const formData = new FormData();

    if (requestBOd) {
      Object.entries(requestBOd).forEach(([key, value]) => {
        formData.append(key, String(value));
      });
    }


    console.log("formData", formData)
    console.log("jwtToken", jwtToken)
    console.log("apiroute", apiroute)

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
export async function ApiFetchProducts({ jwtToken, page, limit }: { jwtToken: string, page: number, limit: number }) {
  const apiroute = `/product/fetch?page=${page}&&limit=${limit}`
  console.log("apiroute", apiroute)
  const SubmitHandler = async () => {
    const response = await PostApiCall({ jwtToken, apiroute })
    return response.data;
  };
  return SubmitHandler();
}
export async function ApiUpdateProduct({ jwtToken, requestBody, id }: ApiFetchProductsprops) {
  const apiroute = `/product/update/${id}`

  const SubmitHandler = async () => {
    if (jwtToken === null) {
      console.error("JWT Token is required");
      throw error;
    }
    const result = await PostApiCall({ jwtToken, apiroute, requestBody });
    console.log("sucessufully updated")
    return result.data;
  };
  return SubmitHandler();
}
export function ApiUploadProduct({ jwtToken, requestBody }: ApiUploadProductsprops) {

  const apiroute = "/product/upload"
  const SubmitHandler = async () => {

    const response = await PostApiCall({ jwtToken, apiroute, requestBody });
    return response.data;
  };
  return SubmitHandler();
}
export function ApiUploadCollection({ jwtToken, requestBody }: ApiUploadCollectionprops) {

  const apiroute = "/collection/upload"
  const SubmitHandler = async () => {

    const response = await PostApiColectionCall({ jwtToken, apiroute, requestBody });
    return response.data;
  };
  return SubmitHandler();
}
export async function ApiUploadImage(imaggg: File, jwtToken: string) {
  if (imaggg) {
    const imageFile = imaggg;
    const formData = new FormData();
    formData.append('files', imageFile);
    try {
      const response = await axios.post('http://localhost:8000/media/image/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${jwtToken}`
        }
      });
      console.log('Image upload successful:', response.data);
      return response.data
    } catch (error) {
      console.error('Image upload failed:', error);
    }
  }
};
export async function ApiUploadMultipleImages(formData: FormData, jwtToken: string) {
  try {
    const response = await axios.post('http://localhost:8000/media/images/upload', formData, {

      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${jwtToken}`
      }
    });
    return response.data

  } catch (error) {
    throw error

  }
}


