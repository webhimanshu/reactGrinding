export const reducer=(state,action)=>
{
switch(action.type)
{
case "DELETE":
    return {...state,items:state.items.filter((data)=>data.id !==action.value)}

  case "INCREMENT":
    let updatedcart=state.items.map((curItem)=>
    {
        if(action.value===curItem.id)
        {
            return {...curItem,quantity:curItem.quantity+1}
        }
        return curItem;
    })  
    return {...state,items:updatedcart}


case "DECREMENT":
  

    let deletedItems=state.items.map((curItem)=>
    {
        if(action.value===curItem.id)
        {
return{...curItem,quantity:curItem.quantity-1}
        }
        return curItem;
    })

return {...state,items:deletedItems}

case "GET_TOTAL":
    let{TotalItem,TotalPrice}=state.items.reduce((accum,curVal,)=>
    {
  let {price,quantity}=curVal;
 let updatedPrice=price*quantity;
  accum.TotalPrice+=updatedPrice;
  accum.TotalItem+=quantity;
  return accum;
    },{TotalItem:0,TotalPrice:0})
return{...state,TotalItem,TotalPrice}






}

}