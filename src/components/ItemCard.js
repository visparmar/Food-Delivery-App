import React,{useState} from 'react'
import {Favorite,AddTwoTone,GradeRounded} from '@mui/icons-material';
import './ItemCard.css'
import { useDispatch } from 'react-redux';
import {SET_CART} from '../redux/Action'





const ItemCard = ({ imgSrc, name, ratings, price}) => {

const dispatch=useDispatch();
    

const [isFavourite,setIsFavourite]=useState(false);
const [rating,setRating]=useState(Math.floor(ratings));

 
const handleClick=(value)=>{
    
      setRating(value);
}
    
   return (<div className="itemCard">
        <div className={`isFavourite ${isFavourite?"activeFavourite":""}`}
        onClick={()=>setIsFavourite(!isFavourite)}
        >
            <Favorite  />
        </div>
        <div className="imgBox">
            <img src={imgSrc} alt='this '/>
        </div>
        <div className="itemContent">
            <h3>{name}</h3>
            <div className="bottom">
                <div className="ratings">
                    {Array.apply(null,Array(5)).map((e,i)=>{
                           return( <i  key={i} className={`rating ${rating>i?"orange":""}`}
                           onClick={()=>handleClick(i+1)}
                           >
                            <GradeRounded/>
                        </i>)
                    })}
                </div>
                <h3><span className='dollar-sign'>$</span>{price}</h3>
                <i className='addToCart' onClick={()=>dispatch(SET_CART)}>
                    <AddTwoTone/>
                </i>
            </div>
        </div>
    </div>)

}
export default ItemCard;