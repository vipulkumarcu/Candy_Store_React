/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import CandyContext from "./candy-context";

function CandyProvider ( props )
{
  const [ candyList, setCandyList ] = useState ( [] );
  const [ candyCart, setCandyCart ] = useState ( [] );
  const [ totalCartPrice, setTotalCartPrice ] = useState ( 0 );
  const [ totalCartQuantity, setTotalCartQuantity ] = useState ( 0 );

  function addCandyToList ( candy )
  {
    setCandyList (
      ( prevCandies ) => {
        const existingItemIndex = prevCandies.findIndex( ( prevCandy ) => prevCandy.id === candy.id );

        if ( existingItemIndex !== -1 )
          {
          return prevCandies;
        }

        else
        {
          return [ ...prevCandies, candy ];
        }
      }
    );
  }

  function removeCandyFromList ( id )
  {
    setCandyList (
      ( prevCandies ) => {
        const existingItemIndex = prevCandies.findIndex( ( prevCandy ) => prevCandy.id === id );

        if ( existingItemIndex === -1 )
        {
          return prevCandies;
        }

        const updatedItems = [ ...prevCandies ];
        updatedItems.splice( existingItemIndex, 1 );
        return updatedItems;
      }
    );
  }

  function addCandyToCart ( candy, quantity )
  {
    setCandyCart (
      ( prevCandies ) => {
        const existingItemIndex = prevCandies.findIndex( ( prevCandy ) => prevCandy.id === candy.id );
        let updatedItems = [ ...prevCandies ];

        if ( existingItemIndex !== -1 )
        {
          const updatedItem = { ...updatedItems[existingItemIndex], quantity: updatedItems[existingItemIndex].quantity + quantity };
          updatedItems[existingItemIndex] = updatedItem;
        }
        
        else
        {
          updatedItems = [ ...prevCandies, { ...candy, quantity } ];
        }

        updateCartSummary ( candy.price * quantity, quantity );
        return updatedItems;
      }
    );
  }

  function removeCandyFromCart ( id )
  {
    setCandyCart (
      ( prevCandies ) => {
        const existingItemIndex = prevCandies.findIndex( ( prevCandy ) => prevCandy.id === id );

        if (existingItemIndex === -1)
        {
          return prevCandies;
        }

        const updatedItems = [ ...prevCandies ];
        const existingItem = updatedItems[existingItemIndex];
        updateCartSummary ( -existingItem.price * existingItem.quantity, -existingItem.quantity );
        updatedItems.splice ( existingItemIndex, 1 );
        return updatedItems;
      }
    );
  }

  function updateCartSummary ( priceChange, quantityChange )
  {
    setTotalCartPrice ( ( prevTotal ) => prevTotal + priceChange );
    setTotalCartQuantity ( ( prevTotal ) => prevTotal + quantityChange );
  }

  const candyContext = {
    candyList,
    candyCart,
    totalCartPrice,
    totalCartQuantity,
    addCandyToList,
    removeCandyFromList,
    addCandyToCart,
    removeCandyFromCart,
  };

  return (
    <CandyContext.Provider value = { candyContext }>
      { props.children }
    </CandyContext.Provider>
  );
}

export default CandyProvider;