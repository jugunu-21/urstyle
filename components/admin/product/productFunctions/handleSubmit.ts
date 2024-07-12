
export interface ProductRequestBody {
    pid: number;
    name: string;
    code: string;
    link: string;
    description: string;
    price: string;
    image: string ; // Assuming image can be null or a string URL
  }
  interface SubmitFunctionArgs {
    requestBody: ProductRequestBody;
    jwtToken: string; // Assuming jwtToken is a string
  }
  async function handleSubmit({ requestBody, jwtToken }: SubmitFunctionArgs) {
    console.log("submitfunction")
    console.log("requestbody",requestBody)
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/media/product/upload`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
        body: JSON.stringify(requestBody),
      }
    );
    if (!response.ok) {
      console.log("error");
      // throw new Error("Failed to fetch user details");
    } else {
      console.log("uploaded product");
    }
    
}

export default handleSubmit;