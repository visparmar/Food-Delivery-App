import React,{useEffect}from "react";
import './Header.css'
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import logo from '../images/img/chef1.png'
import profile from '../images/img/avatar.png'
import { useSelector} from "react-redux";
const Header = () => {
  const mystate=useSelector((state)=>state.reducer);
    useEffect(() => {
      const toggleMenu=document.querySelector('.shoppingCart');
      console.log("s");
      toggleMenu.addEventListener('Click',()=>{ 
        document.querySelector('.right-container').classList.toggle('activeRightMenu');
      });
    }, []);
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
                    <p>{mystate}</p>
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