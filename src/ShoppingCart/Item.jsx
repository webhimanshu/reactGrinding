import React ,{useState,useContext}from 'react'
import { Contextcart } from './Cart';
import './cart.css';
const Item = ({item}) => 
{

const{id,title,description,price,img,quantity}=item;
 const {deleteitem,increment,decrement}=useContext(Contextcart);
    return (
        <>
           <div className='item-info'>
                  <div className='product-img'>
                      <img src={img} alt="images" />
                  </div>
                  <div className='title'>
                      <h2>{title}</h2>
                      <p>{description}</p>
                  </div>
                  <div className='add-minus-quantity'>
                   <i className='fas fa-minus minus ' onClick={()=>decrement(id)}></i>
                   <input type="text" placeholder={quantity===0?deleteitem(id):quantity}/>
                   <i className='fas fa-plus plus' onClick={()=>increment(id)}></i>
                   
                  </div>
                  <div className='price'>
                    <h3>{price}rs</h3>
                  </div>
                  <div className='remove-items'>
                      <i className='fas fa-trash-alt remove' onClick={()=>deleteitem(id)}></i>
                  </div>
               
              </div>

               <hr></hr>
  
        </>
    )
}

export default Item
