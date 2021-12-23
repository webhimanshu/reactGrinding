import React,{useState} from 'react'
import '../Restaurent/style.css';
import Menu from '../menuData';
import Child from './Child';
import Navbar from './Navbar';



const navlist=[...new Set(Menu.map((list)=>{return list.category})),"All"];
console.log(navlist);






const Restaurent = () => {
    const [menu, setmenu] = useState(Menu);
    const [list,setlist]=useState(navlist);
    const fliterItem=(category)=>
    {  
         if(category==='All')
        {
          setmenu(Menu);
          return;
        }
  const updatedlist=Menu.filter(
      (cat)=>
      (cat.category===category));
  setmenu(updatedlist);
    }
   
    return (
        <>
          <Navbar list={list} fliterItem={fliterItem}></Navbar>          

        <Child menu={menu}></Child>
        </>
    )
}

export default Restaurent
