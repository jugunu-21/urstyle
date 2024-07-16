


 export const minimalProductsprops: Productsprops = [{
    link: '',
    code: '',
    pid: 0,
    image: '',
    description: '',
    name: '',
    price: '',
    review: [],
}];

  
import React, { createContext, useContext, useState } from 'react';

export type Productsprops = [{
    code: string;
    link: string;
    pid: number;
    image: string;
    description: string;
    name: string;
    price: string;
    review: Array<Record<string, unknown>>;
}];
 export const ProductsContext = createContext<Productsprops>(minimalProductsprops);

