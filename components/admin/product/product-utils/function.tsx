
import { ProductDataInterface } from "./product-services/product-data-interface"
import axios, { AxiosRequestConfig } from 'axios';
import { decodeBase64,srctoBase64 } from "@/components/admin/product/product-utils/product-services/image-services"
type ApiUploadProductsprops = {
  responses?: string
  jwtToken: string
  requestBody: ProductDataInterface
};
type ApiFetchProductsprops = {
  jwtToken: string
  requestBody: ProductDataInterface
  id?: string
}
async function PostApiCall(args: { requestBody?: ProductDataInterface | null; jwtToken: string, apiroute: string}) {
  try {
    const { requestBody, jwtToken, apiroute} = args;
    const formData = new FormData();
    if (requestBody) {
      Object.entries(requestBody).forEach(([key, value]) => {
        if (key !== 'image') {
            formData.append(key, String(value));   
        }
      });
    }
    if (requestBody?.image) {
      const blob=srctoBase64(requestBody.image)
      const file = decodeBase64(blob)
      formData.append('image', file)
    }
  
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
export async function ApiFetchProducts({ jwtToken,page,limit }: { jwtToken: string ,page:number,limit:number}) {
  const apiroute = `/media/product/fetch?page=${page}&&limit=${limit}`
  console.log("apiroute",apiroute)
  const SubmitHandler = async () => {
    // console.log("jwtToken present in fetchproduct func ", jwtToken)
    const response = await PostApiCall({ jwtToken, apiroute })
    return response.data;
  };
  return SubmitHandler();
}
export async function ApiUpdateProduct({ jwtToken, requestBody, id }: ApiFetchProductsprops) {
  const apiroute = `/media/product/update/${id}`

  const SubmitHandler = async () => {
    if (jwtToken === null) {
      console.error("JWT Token is required");
      return; // Optionally, you could redirect the user or show an error message
    }
    const result = await PostApiCall({ jwtToken, apiroute, requestBody });
    console.log("sucessufully updated")
    return result.data;
  };
  return SubmitHandler();
}
export function ApiUploadProduct({ jwtToken, requestBody}: ApiUploadProductsprops) {

  const apiroute = "/media/product/upload"
  const SubmitHandler = async () => {
    // console.log("jwtToken present in uploadproduct func ", jwtToken)
    const response = await PostApiCall({ jwtToken, apiroute, requestBody });
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
    console.log('Image upload successful:', response.data);
    // Handle successful upload (e.g., display success message)
  } catch (error) {
    throw error
    console.error('Image upload failed:', error);
    // Handle upload errors (e.g., display error message)
  }
}


