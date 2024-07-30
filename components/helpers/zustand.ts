"use client"
import { create } from 'zustand';
import getJwtTokenFromCookies from "@/components/helpers/getcookie";
import { persist, createJSONStorage } from 'zustand/middleware';

import ApiFetchProducts from '../admin/product/productFunctions/apiFetchProducts';
import { ProductsContext, Productsprops, minimalProductArray } from '@/components/context/mycontext';

const jwt = getJwtTokenFromCookies()
console.log("tokeninz", jwt)


interface Store {
  data: Productsprops;
  setData: (data: Productsprops) => void;
}

interface token {
  token: string | null;
  changeToken: (token: string) => void;

}
export const useToken = create<token>((set) => ({
  token: jwt,
  changeToken: (tokenn: string) => set(() => ({
    token: tokenn
  })),
}));
export const useStore = create
  (persist<Store>
    ((set) => ({
      data: minimalProductArray,
      setData: (datas: Productsprops) => set((state) => (
        { data: datas }
      ))
    })
      , {
        name: 'my-zustand-store',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )
console.log("end of zustand");
