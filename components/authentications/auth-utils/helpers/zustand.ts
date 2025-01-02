"use client"
import { create } from 'zustand';
import getJwtTokenFromCookies from "../helpers/get-cookie";
import { persist, createJSONStorage } from 'zustand/middleware';
import { minimalProductArray, productsProp, productlistprop } from '@/components/admin/product/product-utils/product-interface';
const jwt = getJwtTokenFromCookies()
// console.log("tokeninz", jwt)
interface Store {
  data: productsProp;
  setData: (data: productsProp) => void;
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
      setData: (datas: productsProp) => set((state) => (
        { data: datas }
      ))
    })
      , {
        name: 'my-zustand-store',
        storage: createJSONStorage(() => localStorage)
      }
    )
  )

