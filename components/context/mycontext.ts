// "use client "
export type MyObjectType = {
    myArray: Productsprops; // Replace YourArrayType with the actual type of elements in the array
    myString: string;
};
export const minimalProductArray: Productsprops = [{
    id: '',
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
    id: string,
    code: string,
    link: string,
    pid: number,
    image: string,
    description: string,
    name: string,
    price: string,
    review: Array<Record<string, unknown>>,
}];
export type productlistprop = {
    code: string;
    name: string;
    link: string;
    description: string;
    pid: number;
    price: string;
    image: string;
    review: Record<string, unknown>[];
    id: string;
}[];

// Adjusted myObject to match MyObjectType correctly
const myObject = {
    myArray: minimalProductArray,
    myString: "true",
};

// Use myObject as the default value for createContext
export const ProductsContext = createContext<MyObjectType>(myObject);

// If you still need minimalProductArray for other purposes, keep it as is
