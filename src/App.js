import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menucategory from './components/MenuCategory';
import MenuCard from './components/MenuCard';
import logo from './images/img/logo.png';
import MenuContainer from './components/BottomMenu';
import { MenuItems, Items } from './components/Data';
import ItemCard from './components/ItemCard.js'
import DebitCard from './components/DebitCard'
import CartItem from './components/CartItem'
import { useSelector } from 'react-redux';
import {TOTAL} from './redux/Action'
import { useDispatch } from 'react-redux';
import {
  AccountBalanceWalletRounded,
  HomeRounded,
  ChatRounded,
  FavoriteBorderRounded,
  SummarizeRounded,
  SettingsRounded
} from '@mui/icons-material';

import Banner from './components/Banner'



function App() {
  
   const disp=useDispatch();
 
  const getdata=useSelector((state)=>state.cartreducer.carts);
 
  const totalprice=useSelector((state)=>state.cartreducer.price);
 
  const [cartDetail,setcartDetail]=useState(getdata);


  useEffect(()=>{
   
    
      setcartDetail(getdata);
  },[getdata])


  const [menuData, setMenuData] = useState(Items.filter((element) => {
    return element.itemId === 'buger01';
  })
  );





  function filterData(cat) {

    const updatedList = Items.filter((element) => {

      return cat === element.itemId;
    });

    setMenuData(updatedList);
  };






  useEffect(() => {
    const menuList = document.querySelectorAll("#menu li");
    const rowContainerLIst = document.querySelectorAll(".rowMenuCard");

    function setActiveMenu() {
      rowContainerLIst.forEach((n) => n.classList.remove("activeMenu"));
      this.classList.add("activeMenu");
    }

    function setActive() {
      menuList.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    menuList.forEach((n) => n.addEventListener('click', setActive));


    rowContainerLIst.forEach((n) => n.addEventListener('click', setActiveMenu));

  }, [menuData]);


  return (
    <div className="App">


      {/* Header Section */}
      <Header />


      {/* Main Section */}
      <main>
        <div className="main-container">

          {/* Banner */}

          <div className="banner">
            <Banner name="vikas" price='20' link={"#"} />
            <img src={logo} alt='delivery pic' className='banner-image' />
          </div>

          {/* Dish Container */}
          <div className="dishContainer">
            <div className="menuCard">
              <Menucategory name="Main category" />
            </div>

            <div className="rowContainer">

              {MenuItems.map((data) => {
                return (
                  <div key={data.id} className="menu-items" onClick={() => filterData(data.itemId)}>
                    <MenuCard imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id === 1 ? true : false}
                    />
                  </div>
                );
              })}
            </div>




            <div className="dishItemContainer">


             

              {menuData.map((data) => {
                return (
                  <div key={data.id}>
                    <ItemCard imgSrc={data.imgSrc}
                      name={data.name}
                      ratings={data.ratings}
                      price={data.price}
                       Id={data.id}
                    />
                  </div>

                );
              })}


            </div>
          </div>

        </div>
        <div className="right-container">
          <div className="debitCardContainer">
            <div className="debitCard">
              <DebitCard />
            </div>
          </div>
          <div className="cardCheckoutContainer">
          <Menucategory name="Carts Items" />
            <div className="cartContainer">
             

              <div className="cartItems">

                  {cartDetail.map((data)=>{
                    return(
                      <div key={data.id}>

                      <CartItem
                      name={data.name}
                      imgSrc={data.imgSrc}
                     Id={data.id}
                      price={data.price}
                      
                    />
                   
                      </div>
                    
                    );
                  })}
               

      

              </div>

            </div>
               <div className="totalSection">
                <h3 className="total">Toltal</h3>
                <p>
                  <span>$ </span>{totalprice}
                </p>
               </div>
               <button className="checkOut">Checkout</button>
          </div>
        </div>
      </main>



      {/* Bottom Section */}
      <div className="bottomMenu">
        <ul id="menu">
          <MenuContainer link={'#'} icon={<HomeRounded />} ishome />

          <MenuContainer link={'#'} icon={<ChatRounded />} />

          <MenuContainer link={'#'} icon={<AccountBalanceWalletRounded />} />

          <MenuContainer link={'#'} icon={<FavoriteBorderRounded />} />

          <MenuContainer link={'#'} icon={<SummarizeRounded />} />

          <MenuContainer link={'#'} icon={<SettingsRounded />} />

          <div className="indicator"></div>
        </ul>
      </div>



    </div>
  );
}

export default App;
