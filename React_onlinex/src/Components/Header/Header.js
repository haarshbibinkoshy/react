import React, { useContext } from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router';
function Header() {
  const {user} = useContext(AuthContext)
const firebase = useContext(FirebaseContext) 
 const history=useHistory()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          {/* <OlxLogo></OlxLogo> */}
          {<img className="logo" src="https://img.icons8.com/external-inipagistudio-lineal-color-inipagistudio/64/000000/external-online-shop-business-activity-inipagistudio-lineal-color-inipagistudio.png"/>}
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user? `Hello! ${user.displayName}`:`Login`}</span>
          <hr />
        </div>
       {user && <span className="logout-btn" onClick={()=>{ firebase.auth().signOut().then(()=>{
         history.push('/login')
       })}}>Logout</span>}

        <div onClick={()=>{history.push(`/create`)}} className="sellMenu">
          <SellButton ></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
