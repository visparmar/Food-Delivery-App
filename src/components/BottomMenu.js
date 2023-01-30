import react from 'react'
import './BottomMenu.css'


const MenuContainer=({link,icon,ishome})=>{
return<li className={ishome?'active':""}>
<a href={link}></a>
<span className='icon'>{icon}</span>
</li>
}
export default MenuContainer;