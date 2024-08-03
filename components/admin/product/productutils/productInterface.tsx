export type MyObjectType = {
    myArray: productsProp; // Replace YourArrayType with the actual type of elements in the array
    myString: string;
};
export const minimalProductArray: productsProp = [{
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

export type productsProp = [{
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