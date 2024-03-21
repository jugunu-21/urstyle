 // Import global styles if needed
import 'tailwindcss/tailwind.css';
import React from 'react';
import "./globals.css";

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