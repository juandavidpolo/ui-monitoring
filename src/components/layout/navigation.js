import React, {useState, useEffect} from "react";

import { getViews } from 'src/utils/routes';
import {userIcon, notificationsCampaing, navigationArrow} from 'src/assets/svg';

const NavigationBar = () => {

  const [navItems, setNavItems] = useState([]);

  useEffect(()=>{
    setNavItems(getNavItems)
  },[])

  const getNavItems = () => {
    return getViews((routePath) => ({
      route: routePath,
      name: routePath.charAt(0).toUpperCase() + routePath.slice(1),
    }));
  }

  return(
    <div className="custom--navigation">
      <div className="navigation--section">
        <div className="logo">
          Logo
          CUBE Portal
        </div>
        <div className="user">
          <div>
            {notificationsCampaing()}
          </div>
          <div>
            {userIcon()}
          </div>
          <div>Username</div>
        </div>
      </div>
      <div className="navigation--section">
        <div className="client--selector">
          <button className="custom--button nav--button">
            Cliente inc
            {navigationArrow()}
          </button>
        </div>
        {navItems && navItems.length>0 && navItems.map((navItem, i)=>(
          <div className="view--selector" key={i}>
            <a href={navItem.route} className="custom--button nav--button">
              {navItem.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavigationBar;