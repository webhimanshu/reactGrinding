import React from 'react'
import '../Restaurent/style.css';
const Child = ({menu}) => {
    
    return (
        <>

<div className="card-container">
            
      
            
{
    menu.map((card)=>
    {
        return (



            
            <div className="card" key={card.id}>
                <div className="card-body">
                    <span className="card-number">{card.id}</span>
                    <span className="card-author">{card.category}</span>
                    <span className="card-title" style={{color:'crimson'}}>{card.name}</span>
                    <span className="card-description">
                    {card.description}
                    </span>
                     <div className="read">Read</div>
                    <img src={card.image} alt="img" className="img-card"/>
                    <span className="card-tag" >Ordernow</span>
                </div>
            </div>



        )
    })
}            
            
            
            
            
            
            
            
            
            





                        </div>

        
        </>
    )
}

export default Child
