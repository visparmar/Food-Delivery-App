import React,{useEffect}from "react";
import './Header.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from '../images/img/chef1.png'
import profile from '../images/img/avatar.png'

const Header = () => {

    useEffect(() => {
      const toggleMenu=document.querySelector('.toggleIcon');

      toggleMenu.addEventListener('click',()=>{
        document.querySelector('.right-container').classList.toggle('activeRightMenu');
      })
    }, [])
    return (
        <header>
            <img src={logo} alt="thi is logo" className="logo"/>

            <div className="inputBox">
            <SearchRoundedIcon className="searchIcon"/>
                <input type="text" placeholder="search.."/>
                
            </div>

           <div className="shoppingCart">
                   <ShoppingCartRoundedIcon className="cart"/>
                   <div className="cartContent">
                    <p>2</p>
                   </div>
           </div>

         <div className="profileContainer">

            <div className="imgBox">
                <img src={profile} alt=""/>
            </div>

            <h2 className="userName">vikas Parmar</h2>

         </div>
           
           <div className="toggleIcon">
           <MenuRoundedIcon className="menuItem"/>
           </div>

        </header>
    );
}

export default Header;