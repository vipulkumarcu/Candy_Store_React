import { useContext, useState } from 'react'
import Cart from './Components/Cart/Cart'
import Form from './Components/Form/Form'
import List from './Components/List/List'
import CandyContext from './Store/candy-context'

function App ()
{
  const context = useContext ( CandyContext );
  const [ isVisible, setIsVisible ] = useState ( false );

  function toggleCart ()
  {
    setIsVisible ( ( prev ) => ( !prev ) )
  }

  return (
    <div className = "container">

      <h1> Candy Shop </h1>

      <div className = "cart-button">
        <button onClick = { toggleCart }>
          Cart <span> { context.candyCart.length } </span>
          {/* Cart <span> { context.totalCartQuantity } </span> */}
        </button>
        {
          isVisible && <Cart />
        }
      </div>

      <Form />

      <List />
      
    </div>
  )
}

export default App