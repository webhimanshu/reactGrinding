import React,{useContext} from 'react'
import './cart.css';
import Item from './Item';
import {Contextcart} from './Cart';
const CartContext = () => 
{

    const {item,removeAll,totalitem,totalprice}=useContext(Contextcart);
    if(item.length<=0)
    {
      return(
          <>
         
            
         <header>
              <div className='countinue-shopping'>
              <i className="fas fa-arrow-left"></i>
               <h3>countinue shopping</h3>
              </div>
              <div className='cart-icon'>
              <i className="fas fa-shopping-cart"></i>
              <p>0</p>
              
              </div>
          </header> 
          <div className='main-cart-section'>
             <h1>Shopping Cart</h1>
             <p className='total-item'>You have <span className='total-item-count'>0</span> items in shopping cart</p>
            <div className='cart-item'>
             <div className='cart-item-container'>
             {item.map((item)=>(
              <Item  item={item}  key={item.id}/> 

             ))

             }
                

          

              </div>
            

            
         </div>
         
         <div className='cart-total'>
                   <h3>Cart total:<span>0</span></h3>
                     <button>checkout</button>
                     <button onClick={()=>removeAll()}>clear All</button>
               </div>
          </div>
     
          </>
      )
    }
    return (
        <>
            
          <header>
              <div className='countinue-shopping'>
              <i className="fas fa-arrow-left"></i>
               <h3>countinue shopping</h3>
              </div>
              <div className='cart-icon'>
              <i className="fas fa-shopping-cart"></i>
              <p>{totalitem}</p>
              
              </div>
          </header> 
          <div className='main-cart-section'>
             <h1>Shopping Cart</h1>
             <p className='total-item'>You have <span className='total-item-count'>{totalitem}</span> items in shopping cart</p>
            <div className='cart-item'>
             <div className='cart-item-container'>
             {item.map((item)=>(
              <Item  item={item}  key={item.id}/> 

             ))

             }
                

          

              </div>
            

            
         </div>
         
         <div className='cart-total'>
                   <h3>Cart total:<span>{totalprice}</span></h3>
                     <button>checkout</button>
                     <button onClick={()=>removeAll()}>clear All</button>
               </div>
          </div>

          
        </>
           )
}

export default CartContext
