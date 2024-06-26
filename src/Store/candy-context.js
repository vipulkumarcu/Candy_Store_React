/* eslint-disable no-unused-vars */
import { createContext } from "react";

const CandyContext = createContext ( 
  {
    candyList : [],
    candyCart : [],
    totalCartPrice : 0,
    totalCartQuantity : 0,
    addCandyToList : ( candy ) => {},
    removeCandyFromList : ( id ) => {},
    addCandyToCart : ( candy, quantity ) => {},
    removeCandyFromCart : ( id ) => {},
  }
)

export default CandyContext;