
// 
import {ProductDataInterface} from "../productutils/productServices/productDataInterface"
import axios, { AxiosRequestConfig } from 'axios';
  // interface SubmitFunctionArgs {
  //   requestBody: ProductRequestBody|null;
  //   jwtToken: string; // Assuming jwtToken is a string
  // }
  async function PostApiCall(args: { requestBody?: ProductDataInterface | null; jwtToken: string ,apiroute:string}) {
   try{ const { requestBody, jwtToken,apiroute} = args;
   
   const response = axios({
     method: 'post',
     url: `${process.env.NEXT_PUBLIC_BASE_URL}${apiroute}`,
     data: requestBody,
     headers: {
       "Content-Type": "application/json", 
         Authorization: `Bearer ${jwtToken}`,
       },
   });
 return response;
}catch(error)
{

  console.log(error)
  throw error
 }
   
   
  }
export default PostApiCall;







// // 
// import axios from 'axios';
// import {ProductDataInterface} from "../productutils/productServices/productDataInterface"
//   // interface SubmitFunctionArgs {
//   //   requestBody: ProductRequestBody|null;
//   //   jwtToken: string; // Assuming jwtToken is a string
//   // }
//   async function PostApiCall(args: { requestBody?: ProductDataInterface | null; jwtToken: string ,apiroute:string}) {
//     const { requestBody, jwtToken,apiroute} = args;
//     console.log("submitfunction");
//     console.log("requestBody", requestBody);
//     interface CustomRequestInit extends RequestInit {
//       body?: string;
//     }
//     // Define the base options for the fetch request
//     const requestOptions:CustomRequestInit = {
    
//       credentials: "include",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${jwtToken}`,
//       },
//     };
  
//     // Conditionally add the body property if requestBody is not null
//     if (requestBody !== null) {
//       requestOptions.body = JSON.stringify(requestBody);
//     }
  
//     const response = await axios.post(
//       `${process.env.NEXT_PUBLIC_BASE_URL}${apiroute}`,
//       requestOptions
//     );
  
//     // if (!response.ok) {
//     //   console.log("error");
//     //   // Optionally, handle the error here
//     // } else {
//     //   console.log("Uploaded product");
//     //   // Optionally, handle the successful upload here
//     // }
//     const data =  response
//     console.log(data)
//     return data;
//   }
// export default PostApiCall;