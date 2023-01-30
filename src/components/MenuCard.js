import React from 'react'
import './MenuCard.css'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const MenuCard = ({ imgSrc, name,isActive}) => {
    return <div className={`rowMenuCard ${isActive?`activeMenu`:``}`}>
        <div className="imgBox">
            <img src={imgSrc} alt='' />
        </div>

        <h3>{name}</h3>
        <i className='loadMenu'>
            <NavigateNextIcon />
        </i>
    </div>
}
export default MenuCard;