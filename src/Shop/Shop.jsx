import React,{useState,useReducer,createContext,useEffect} from 'react'
import Item from './Item'
import './style.css';
import Menu from './Menu';
import { reducer } from './reducer';
export const ContextData=createContext();
const initialState=
{
    items:Menu,
    TotalPrice:0,
    TotalItem:0,
}
const Shop = () => 
{
let deleteProduct=(id)=>
{
return dispatch({type:"DELETE",value:id})
}
const Increment=(id)=>
{
return dispatch({type:"INCREMENT",value:id})
}
let Decrement=(id)=>
{
    return dispatch({type:"DECREMENT",value:id})
}

    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(()=>
    {
   dispatch({type:"GET_TOTAL"});
 
   
    }
    , [state.items])
    return (
        <>
            <ContextData.Provider value={{...state,deleteProduct,Increment,Decrement}}> 
          <Item />
</ContextData.Provider>         
        </>
    )
}

export default Shop
