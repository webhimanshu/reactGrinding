import React,{createContext,useReducer,useEffect} from 'react'
import CartContext from './CartContext';
import {products} from './Products';
import { reducer } from './reducer';
export const Contextcart=createContext(products);
const initialState=
{
  item:products,
  totalitem:0,
  totalprice:0
}
const Cart = () => {
  // const [item, setitem] = useState(products);
  const [state, dispatch] = useReducer(reducer, initialState);
 

const deleteitem=(id)=>
{
return (dispatch({type:"DELETE",value:id}))
}
const removeAll=()=>
{
  return(dispatch({type:"ALL"}))
}

const increment=(id)=>
{
return(dispatch({type:"INCREMENT",value:id}))
}
const decrement=(id)=>
{
return(dispatch({type:"DECREMENT",value:id}))
}
  useEffect(()=>
  {
 dispatch({type:"GET_TOTAL"});
 dispatch({type:"GET-PRICE"});
 
  }
  , [state.item])
    return (
        <>
       <Contextcart.Provider  value={{...state,deleteitem,removeAll,increment,decrement,}}>
         <CartContext/>
       </Contextcart.Provider>
         
        </>
    )
}

export default Cart
