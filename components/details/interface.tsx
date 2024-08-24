export interface ICartItem {
    id: number;
    name: string;
    code: string;
    link: string;
    image_url: string;
    price: string;
    review: {
      image: string;
      rname: string;
      date: string;
      content: string;
      rating: number;
    }[];
    description: string;
  }
  
   export interface Icollection {
    id: number;
    look: string;
    desc: string;
    expected_delivery: number;
    cart: ICartItem[];
    overall_description: string;
  }