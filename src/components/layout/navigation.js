import React, {useState, useEffect} from "react";
import { useLocation, useNavigate } from 'react-router-dom';

import { getViews } from 'src/utils/routes';
import {userIcon, notificationsCampaing} from 'src/assets/svg';

const NavigationBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [navItems, setNavItems] = useState([]);
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "client 1",
      status: "Offline"
    },
    {
      id: 2,
      name: "client 2",
      status: "Inactive"
    },
    {
      id: 3,
      name: "client 3",
      status: "Active"
    }
  ]);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

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
          <button
            className="custom--button nav--button client--selector--button"
            onClick={()=>toggle()}>
            Cliente
          </button>
          <div className={dropdownOpen?`clients--container show`:`clients--container`}>
            {clients && clients.length > 0 && clients.map((client, i) => (
              <div className="client--item" key={i}>
                  {client.name}
              </div>
            ))}
          </div>
        </div>
        {navItems && navItems.length>0 && navItems.map((navItem, i)=>(
          <div
            key={i}
            className={location.pathname === `/${navItem.route}`? `view--selector active`:`view--selector`}>
            <button
              className="custom--button nav--button"
              onClick={()=>{navigate(`/${navItem.route}`)}}>
              {navItem.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavigationBar;