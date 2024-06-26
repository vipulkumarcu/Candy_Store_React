/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import CandyContext from "../../Store/candy-context";

function List ()
{
  const context = useContext ( CandyContext );

  return (
    <ul>
      {
        context.candyList.map (
          ( candy ) => (
            <li key = { candy.id }> 
              <div> Name: { candy.name } </div>
              <div> Descrpition: { candy.description }  </div>
              <div> Price: { candy.price } </div>

              <button onClick = { ( () => context.addCandyToCart ( candy, 1 ) ) }> Add 1 </button>
              <button onClick = { ( () => context.addCandyToCart ( candy, 2 ) ) }> Add 2 </button>
              <button onClick = { ( () => context.addCandyToCart ( candy, 3 ) ) }> Add 3 </button>

              <button onClick = { () => ( context.removeCandyFromList ( candy.id ) ) }> Delete Candy </button>

            </li>
          )
        )
      }
    </ul>
  )
}

export default List;