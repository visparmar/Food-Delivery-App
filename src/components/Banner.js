import React from 'react'
import './Banner.css'

const Banner=({name,price,link})=>{
    return <div className="banner-content">
        <h3 className='banner-person-name'>Hello  {name},</h3>
        <p>
            Get free discount for every <span>${price} </span> Purchase
        </p>
        <a href={link}> Learn more</a>
    </div>

}
export default Banner;