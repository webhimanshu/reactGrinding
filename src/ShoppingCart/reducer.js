export const reducer = (state, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        item: state.item.filter((item) => item.id !== action.value),
      };
    case "ALL":
      return { ...state, item: [] };

    case "INCREMENT":
      const updatedcart = state.item.map((curItem) => {
        if (action.value === curItem.id) {
          return { ...curItem, quantity: curItem.quantity + 1 };
        }
        return curItem;
      });
      return { ...state, item: updatedcart };

    case "DECREMENT":
      const upadatedcart = state.item.map((curItem) => {
        if (action.value === curItem.id) {
          if (curItem.quantity !== 0) {
            return { ...curItem, quantity: curItem.quantity - 1 };
          }
        }
        return curItem;
      });
      return { ...state, item: upadatedcart };


      case "GET_TOTAL":
          
             let {totalitem,totalprice}= state.item.reduce((accum,curval)=>
              {
                    let {quantity,price}=curval;
                    let updatedprice=price*quantity;
                     accum.totalitem +=quantity;
                     accum.totalprice+=updatedprice;
                     return accum;
              },{totalitem:0,totalprice:0})
              return {...state,totalitem,totalprice};
   
    default:
      return state;
  }
};
