import { useContext, useState } from "react";
import CandyContext from "../../Store/candy-context";

function Form ()
{
  const [ name, setName ] = useState ( "" );
  const [ description, setDescription ] = useState ( "" );
  const [ price, setPrice ] = useState ( "" );

  const context = useContext ( CandyContext )

  function submitHandler (event)
  {
    event.preventDefault();
    
    if ( !name || !description || !price || isNaN ( price ) || Number ( price ) <= 0 )
    {
      alert ( "Please enter valid candy details." );
      return;
    }

    const candy = {
      id: Date.now().toString(),
      name: name,
      description: description,
      price: Number( price )
    }

    context.addCandyToList ( candy );

    setName ( "" );
    setDescription ( "" );
    setPrice ( "" );
  }
  
  return (
    <form className = "form-container" onSubmit = { submitHandler }>
      <label htmlFor = "name"> Candy Name: </label>
      <input type = "text" name = "name" id = "name" value = { name } onChange = { ( e ) => ( setName ( e.target.value ) ) } />
      <label htmlFor = "description"> Description: </label>
      <input type = "text" name = "description" id = "description" value = { description } onChange = { ( e ) => ( setDescription ( e.target.value ) ) } />
      <label htmlFor = "price"> Price: </label>
      <input type = "text" name = "price" id = "price" value = { price } onChange = { ( e ) => ( setPrice ( e.target.value ) ) } />
      <input type = "submit" value = "Add" className = "button" />
    </form>
  )
}

export default Form;