/* eslint-disable no-unused-vars */
import { createContext } from "react";

const CandyContext = createContext ( 
  {
    //List
    candyList : [],
    addCandyToList : ( candy ) => {},
    removeCandyFromList : ( id ) => {},
    //Cart
    candyCart : [],
    totalCartPrice : 0,
    totalCartQuantity : 0,
    addCandyToCart : ( candy, quantity ) => {},
    removeCandyFromCart : ( id ) => {},
  }
)

export default CandyContext;