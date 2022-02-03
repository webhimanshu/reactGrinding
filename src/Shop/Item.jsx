import React,{useContext} from 'react'
import {ContextData} from './Shop';

const Item = () =>
 {
    let Products=useContext(ContextData);
    let{items,TotalPrice,TotalItem,deleteProduct,Increment,Decrement}=Products;

    return (
    <>
        <table>
            <th>Items</th>
            <th>Counter</th>
            <th>Price</th>
            <th>quantity</th>
            <th>Delete</th>
            {
               items.map((data)=>
               (
               <tr>
                   <td>{data.name}</td>
                   <td><button onClick={()=>Increment(data.id)}>Increment</button>
                   <button onClick={()=>Decrement(data.id)}>Decrement</button></td>
                   <td>{data.price}</td>
                   <td>{data.quantity===0?deleteProduct(data.id): data.quantity}</td>
                   <td><button onClick={()=>deleteProduct(data.id)}>Delete</button></td>
               </tr>

               ))
            }
        </table>
        <h1>TotalPrice:{TotalPrice}</h1>
        <h1>TotalItem:{TotalItem}</h1>
    </>
    )
}

export default Item
