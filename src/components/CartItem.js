import React from 'react'
import './CartItem.css'
import {RemoveRounded,AddRounded} from "@mui/icons-material";

const CartItem=({name,imgSrc,qty,price})=>{
  
    return <div className="cardItem">

      <div className="imgbox">
        <img src={imgSrc} alt="" />
      </div>

     <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
            <span>X {qty}</span>

            <div className="quantity">
                <RemoveRounded className='itemRemove'/>

                <AddRounded className='itemAdd'/>
            </div>
        </div>
     </div>


     <div className="itemPrice">
        <span className="dollarSign">$</span>
        <span className="itemPriceValue">{price}</span>
     </div>

    </div>
}
export default CartItem;