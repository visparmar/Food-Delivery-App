import React,{useEffect, useState} from 'react'
import './CartItem.css'
import {RemoveRounded,AddRounded} from "@mui/icons-material";
import { useSelector,useDispatch } from 'react-redux';
import  {DLT,TOTAL} from '../redux/Action'

const CartItem=({name,imgSrc,price,Id})=>{

const mtdata=useSelector((state)=>state.cartreducer.carts)
const disp=useDispatch();
const dp=useDispatch();
  const [qty,setqty]=useState(1);
const totalprice=useSelector((state)=>state.cartreducer.price)
const inqty=1;
const deqty=1;


const handleclick=(ele)=>{
  
  if(ele===-1)
  {
    if(qty===1){
      disp(DLT(Id));
      dp(TOTAL(totalprice-Number(price)));
    }
    else{
      
    
      dp(TOTAL(totalprice-Number(price)));
      setqty(qty- 1);
    }
   
    
    
  } 
  else if(ele===1)
  {
    dp(TOTAL(Number(price)+totalprice));
    setqty(qty + 1);
  } 
  

}





    return <div className="cardItem">

      <div className="imgbox">
        <img src={imgSrc} alt="" />
      </div>

     <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
            <span>X {qty}</span>

            <div className="quantity">
                <RemoveRounded className='itemRemove' onClick={()=>handleclick(-1)}/>

                <AddRounded className='itemAdd' onClick={()=>handleclick(1)}/>
            </div>
        </div>
     </div>


     <div className="itemPrice">
        <span className="dollarSign">$</span>
        <span className="itemPriceValue">{price*qty}</span>
     </div>



    </div>

    
}
export default CartItem;