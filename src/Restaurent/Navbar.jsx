import React from 'react'
import '../Restaurent/style.css';
const Navbar = ({list,fliterItem}) => {
    return (

        <>
                   <nav className="navbar">


            {
                list.map((list,index)=>
                (
                    <button className="button"   key={index} onClick={()=>{fliterItem(list)}}>{list}</button>
           
                ))
            }
            </nav>

        </>
    )
}

export default Navbar
