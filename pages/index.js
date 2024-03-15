import Image from "next/image";
import { Inter } from "next/font/google";

import Clothes from "./components/Clothes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Clothes/>
  </div> 
  );
}
