
// 
import {ProductDataInterface} from "../productutils/productServices/productDataInterface"
  // interface SubmitFunctionArgs {
  //   requestBody: ProductRequestBody|null;
  //   jwtToken: string; // Assuming jwtToken is a string
  // }
  async function PostApiCall(args: { requestBody?: ProductDataInterface | null; jwtToken: string ,apiroute:string}) {
    const { requestBody, jwtToken,apiroute} = args;
    console.log("submitfunction");
    console.log("requestBody", requestBody);
    interface CustomRequestInit extends RequestInit {
      body?: string;
    }
    // Define the base options for the fetch request
    const requestOptions:CustomRequestInit = {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    };
  
    // Conditionally add the body property if requestBody is not null
    if (requestBody !== null) {
      requestOptions.body = JSON.stringify(requestBody);
    }
  
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}${apiroute}`,
      requestOptions
    );
  
    if (!response.ok) {
      console.log("error");
      // Optionally, handle the error here
    } else {
      console.log("Uploaded product");
      // Optionally, handle the successful upload here
    }
    const data = await response.json();
    console.log(data)
    return data;
  }
export default PostApiCall;