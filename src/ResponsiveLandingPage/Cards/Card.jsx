import React from 'react'
import './card.css';
import CardItem from './CardItem';
const Card = () => {
    return (
        <>
          <div className="card-container">
          <h1>Check out these EPIC Destinations</h1>
           <div className="card-item1">
              <CardItem src="/images1/img-9.jpg" text="Explore the hidden waterfall deep inside the Amazon jungle"
                  label="Adventure"
              />
                  <CardItem src="/images1/img-2.jpg" text="Travel through the Islands of Bali in a private Cruise"
                  label="Luxury"
              />
               <CardItem src="/images1/img-3.jpg" text="Travel through the Islands of Bali in a private Cruise"
                  label="Luxury"
              />
               <CardItem src="/images1/img-4.jpg" text="Explore the hidden waterfall deep inside the Amazon jungle"
                  label="Adventure"
              />
                  <CardItem src="/images1/img-8.jpg" text="Travel through the Islands of Bali in a private Cruise"
                  label="Luxury"
              />
               <CardItem src="/images1/img-7.jpg" text="Travel through the Islands of Bali in a private Cruise"
                  label="Luxury"
              />
           
           </div>
          </div>  
        </>
    )
}

export default Card
