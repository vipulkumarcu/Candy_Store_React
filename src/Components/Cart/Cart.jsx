import { useContext } from "react";
import CandyContext from "../../Store/candy-context";

function Cart ()
{
  const context = useContext ( CandyContext );

  return (
    <div className = "cart-container">

      <ul>
        {
          context.candyCart.map (
            ( candy ) => (
              <li key = { candy.id }> 
                <div className = "heading"> Name : </div> { candy.name }
                <div className = "heading"> Descrpition : </div> { candy.description }
                <div className = "heading"> Price : </div> { candy.price } 
                <div className = "heading"> Amount : </div> { candy.quantity }
                <button onClick = { () => ( context.removeCandyFromCart ( candy.id ) ) }> Remove Candy </button>
              </li>
            )
          )
        }
      </ul>

      <div className = "cart-summary">
        <span className = "total-price"> Total Cart Price: Rs. { context.totalCartPrice.toFixed(2) } </span>
      </div>

    </div>
  )
}

export default Cart;