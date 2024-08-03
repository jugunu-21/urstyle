"use client"
import { create } from 'zustand';
import getJwtTokenFromCookies from "@/components/helpers/getCookie";
import { persist, createJSONStorage } from 'zustand/middleware';
import { minimalProductArray,productsProp, productlistprop } from '@/components/admin/product/productUtils/productInterface';
const jwt = getJwtTokenFromCookies()
console.log("tokeninz", jwt)
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
console.log("end of zustand");
