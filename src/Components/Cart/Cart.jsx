import { useContext } from "react";
import CandyContext from "../../Store/candy-context";

function Cart ()
{
  const context = useContext ( CandyContext );

  return (
    <>

      <ul>
        {
          context.candyCart.map (
            ( candy ) => (
              <li key = { candy.id }> 
                <div> Name: { candy.name } </div>
                <div> Descrpition: { candy.description }  </div>
                <div> Price: { candy.price } </div>
                <div> Amount: { candy.quantity } </div>
                <button onClick = { () => ( context.removeCandyFromCart ( candy.id ) ) }> Remove Candy </button>
              </li>
            )
          )
        }
      </ul>

      <div>
        <span> Total Price: Rs. { context.totalCartPrice.toFixed(2) } </span>
      </div>

    </>
  )
}

export default Cart;